<p align="center">
  <img src="icon.svg" alt="DocuSeal Logo" width="21%">
</p>

# DocuSeal on StartOS

> Everything not listed in this document should behave the same as upstream
> DocuSeal. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[DocuSeal](https://github.com/docusealco/docuseal) is a document-signing platform: build PDF forms, collect signatures from several parties, and keep the finished documents on your own server. On StartOS the package supplies two things DocuSeal would otherwise expect you to configure — the address it builds signing links from, and its outbound email.

- **Upstream repo:** <https://github.com/docusealco/docuseal>
- **Wrapper repo:** <https://github.com/Start9Labs/docuseal-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The upstream image is used unmodified, with its own entrypoint, and one subcontainer runs the whole service.

| Property      | Value                                                             |
| ------------- | ----------------------------------------------------------------- |
| Image         | `docuseal/docuseal`                                               |
| Architectures | x86_64, aarch64                                                   |
| Entrypoint    | Upstream default                                                  |
| Subcontainer  | `docuseal-sub` — the `primary` daemon, and the one to `attach` to |

## Volume and Data Layout

One volume, holding everything.

| Volume     | Mount Point      | Purpose                                                              |
| ---------- | ---------------- | -------------------------------------------------------------------- |
| `docuseal` | `/data/docuseal` | DocuSeal's database, uploaded and signed documents, and `store.json` |

DocuSeal runs on its bundled SQLite database here; no separate database service is involved.

## File Models

One model, and both of its fields exist because the value cannot be known until the package is installed.

| File         | Format | Modelled                | Written by                      |
| ------------ | ------ | ----------------------- | ------------------------------- |
| `store.json` | JSON   | Yes — `FileHelper.json` | Every init, and the two actions |

| Key       | Set by                     | Notes                                                              |
| --------- | -------------------------- | ------------------------------------------------------------------ |
| `APP_URL` | The Set Primary URL action | Kept as chosen, even while the address is not one the OS publishes |
| `smtp`    | The Configure SMTP action  | StartOS's system SMTP, your own server, or disabled                |

The package never rewrites `APP_URL`. What it gives DocuSeal is the stored address, followed to its hostname's current port and scheme; while that hostname is not one of the interface's published addresses, or nothing is stored, it gives the `.local` address instead (the first published address if there is no `.local` one), and returns to the stored choice when its address comes back.

**No configuration file reaches the application.** Both values are passed as environment on each start:

| Variable                                                                                                                                     | When                    | Value                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------- |
| `APP_URL`                                                                                                                                    | when an address exists  | The primary address, as described above  |
| `SMTP_ADDRESS`, `SMTP_PORT`, `SMTP_FROM`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_AUTHENTICATION`, `SMTP_ENABLE_STARTTLS`, `SMTP_ENABLE_SSL` | when SMTP is configured | Translated from the chosen SMTP settings |

Supplying SMTP by environment has a visible consequence inside the application: **DocuSeal hides its own Email/SMTP settings screen when those variables are present.** Selecting "Disabled" in the action is therefore how you take email configuration back into DocuSeal itself.

## Dependencies

None.

## Network Access and Interfaces

One interface, serving the whole application and its API. Nothing is exported for dependent services.

| Interface | Id   | Type | Port | Description                |
| --------- | ---- | ---- | ---- | -------------------------- |
| Web UI    | `ui` | ui   | 3000 | The DocuSeal web interface |

The port is bound on the `ui-multi` MultiHost and is not masked. The interface nominates the primary address as the one **Open UI** opens.

## Installation and First-Run Flow

Nothing is generated at install. Account creation is DocuSeal's own: the first visit to the web UI registers the administrator.

Install raises the one task, asking for the primary address (see [Tasks](#tasks)); until it is answered DocuSeal uses the `.local` address. That matters more than it might sound: it is the address DocuSeal embeds in the signing-request links it emails to other people, so if those recipients are outside your network, choose a reachable one with [Set Primary URL](#actions) before sending anything.

Email is not configured until you run [Configure SMTP](#actions), and DocuSeal cannot send signing requests without it.

## Actions

Two actions, both user-facing.

### Set Primary URL

Chooses which published address DocuSeal treats as its own — used for signing-request links, webhook callbacks, and absolute URLs in the API.

- **What it changes:** `APP_URL` in `store.json`, and through it the application's environment on the next start.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent. Links already sent keep pointing at the old address, so change it before distributing signing requests rather than after.
- **Input:** a dropdown of the interface's non-local addresses, with the `.local` one preselected and the current choice prefilled.

### Configure SMTP

Sets up the outbound email DocuSeal needs to send signing requests.

- **What it changes:** `smtp` in `store.json`; the credentials are translated into DocuSeal's own environment variables on the next start.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent; the form is pre-filled with the current settings.
- **Options:** StartOS's system SMTP, your own server, or Disabled — which also restores DocuSeal's built-in Email settings screen, as described in [File Models](#file-models).

## Tasks

One task, `important`, on [Set Primary URL](#actions). It is raised while no primary address is stored or the stored one's hostname is not among the interface's published addresses, and clears when you pick one or the stored address comes back. It does not stop the service: DocuSeal runs on the `.local` address meanwhile.

## Health Checks

One check, on the primary daemon.

| Check                     | Method                 | Grace Period |
| ------------------------- | ---------------------- | ------------ |
| `primary` "Web Interface" | Port 3000 is listening | 90 seconds   |

The 90-second grace covers a first start, where the application creates and migrates its database before binding. A failure after that means the process is down or crash-looping — read the service logs rather than looking for a networking fault.

## Backups and Restore

The `docuseal` volume is copied wholesale — `sdk.Backups.ofVolumes('docuseal')`. No dump step and nothing excluded.

- **Included:** the database, every uploaded and signed document, accounts and templates, and `store.json` with the primary URL and SMTP settings.
- **Restore:** complete, and no reconfiguration is needed. If the restored server does not publish the address the backup recorded, DocuSeal uses the `.local` address and the Set Primary URL task is raised — answer it before sending new signing requests from a restored install.

## Limitations and Differences

1. **DocuSeal's built-in Email/SMTP settings screen is hidden while SMTP is configured here.** Select Disabled in the action to manage email from inside DocuSeal instead.
2. **While the chosen primary address is not published, new signing links carry the `.local` address**, which recipients outside your network cannot reach. The Set Primary URL task is raised for as long as that lasts.
3. **Signing requests need SMTP.** Nothing is sent until it is configured.
4. **No riscv64 build.** x86_64 and aarch64 only.

---

## Quick Reference for AI Consumers

```yaml
package_id: docuseal
image: docuseal/docuseal
architectures:
  - x86_64
  - aarch64
subcontainers:
  - docuseal-sub
volumes:
  docuseal: /data/docuseal
file_models:
  - store.json
startos_managed_env_vars:
  - APP_URL
  - SMTP_ADDRESS # when SMTP is configured
  - SMTP_PORT # when SMTP is configured
  - SMTP_FROM # when SMTP is configured
  - SMTP_USERNAME # when SMTP is configured
  - SMTP_PASSWORD # when SMTP is configured
  - SMTP_AUTHENTICATION # when SMTP is configured
  - SMTP_ENABLE_STARTTLS # when SMTP is configured
  - SMTP_ENABLE_SSL # when SMTP is configured
dependencies: []
interfaces:
  ui: { type: ui, port: 3000 }
actions:
  - set-primary-url
  - manage-smtp
tasks:
  - set-primary-url # important; raised while no published primary address is chosen
health_checks:
  - primary # the daemon's ready check, displayed "Web Interface"
```

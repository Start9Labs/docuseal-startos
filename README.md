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

| Key       | Set by                                | Notes                                                                 |
| --------- | ------------------------------------- | --------------------------------------------------------------------- |
| `APP_URL` | Init, then the Set Primary URL action | Reset by init if the stored address is no longer one the OS publishes |
| `smtp`    | The Configure SMTP action             | StartOS's system SMTP, your own server, or disabled                   |

`APP_URL` is the one value the package re-asserts rather than leaving alone: init checks it against the addresses currently published for the interface and replaces it with the `.local` one if the stored address has gone away. An address you chose is kept as long as it remains reachable.

**No configuration file reaches the application.** Both values are passed as environment on each start:

| Variable                                                                                                                                     | When                    | Value                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------- |
| `APP_URL`                                                                                                                                    | when set                | The chosen primary address               |
| `SMTP_ADDRESS`, `SMTP_PORT`, `SMTP_FROM`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_AUTHENTICATION`, `SMTP_ENABLE_STARTTLS`, `SMTP_ENABLE_SSL` | when SMTP is configured | Translated from the chosen SMTP settings |

Supplying SMTP by environment has a visible consequence inside the application: **DocuSeal hides its own Email/SMTP settings screen when those variables are present.** Selecting "Disabled" in the action is therefore how you take email configuration back into DocuSeal itself.

## Dependencies

None.

## Network Access and Interfaces

One interface, serving the whole application and its API. Nothing is exported for dependent services.

| Interface | Id   | Type | Port | Description                |
| --------- | ---- | ---- | ---- | -------------------------- |
| Web UI    | `ui` | ui   | 3000 | The DocuSeal web interface |

The port is bound on the `ui-multi` MultiHost and is not masked.

## Installation and First-Run Flow

Nothing is generated at install and no task is raised. Account creation is DocuSeal's own: the first visit to the web UI registers the administrator.

The one thing install does decide is the primary address, choosing the `.local` one from those published for the interface. That matters more than it might sound: it is the address DocuSeal embeds in the signing-request links it emails to other people, so if those recipients are outside your network, change it with [Set Primary URL](#actions) before sending anything.

Email is not configured until you run [Configure SMTP](#actions), and DocuSeal cannot send signing requests without it.

## Actions

Two actions, both user-facing.

### Set Primary URL

Chooses which published address DocuSeal treats as its own — used for signing-request links, webhook callbacks, and absolute URLs in the API.

- **What it changes:** `APP_URL` in `store.json`, and through it the application's environment on the next start.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent. Links already sent keep pointing at the old address, so change it before distributing signing requests rather than after.
- **Input:** a dropdown of the interface's non-local addresses, so an unreachable URL cannot be chosen.

### Configure SMTP

Sets up the outbound email DocuSeal needs to send signing requests.

- **What it changes:** `smtp` in `store.json`; the credentials are translated into DocuSeal's own environment variables on the next start.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent; the form is pre-filled with the current settings.
- **Options:** StartOS's system SMTP, your own server, or Disabled — which also restores DocuSeal's built-in Email settings screen, as described in [File Models](#file-models).

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

One check, on the primary daemon.

| Check                     | Method                 | Grace Period |
| ------------------------- | ---------------------- | ------------ |
| `primary` "Web Interface" | Port 3000 is listening | 90 seconds   |

The 90-second grace covers a first start, where the application creates and migrates its database before binding. A failure after that means the process is down or crash-looping — read the service logs rather than looking for a networking fault.

## Backups and Restore

The `docuseal` volume is copied wholesale — `sdk.Backups.ofVolumes('docuseal')`. No dump step and nothing excluded.

- **Included:** the database, every uploaded and signed document, accounts and templates, and `store.json` with the primary URL and SMTP settings.
- **Restore:** complete, and no reconfiguration is needed. If the restored server does not publish the address the backup recorded, init replaces it with a local one — check [Set Primary URL](#actions) before sending new signing requests from a restored install.

## Limitations and Differences

1. **DocuSeal's built-in Email/SMTP settings screen is hidden while SMTP is configured here.** Select Disabled in the action to manage email from inside DocuSeal instead.
2. **The primary URL is reset when the recorded address stops being published**, so a network change can silently move the address embedded in new signing links.
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
tasks: []
health_checks:
  - primary # the daemon's ready check, displayed "Web Interface"
```

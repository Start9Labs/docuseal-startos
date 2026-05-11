<p align="center">
  <img src="icon.svg" alt="DocuSeal Logo" width="21%">
</p>

# DocuSeal on StartOS

> **Upstream docs:** <https://www.docuseal.com/docs>
>
> Everything not listed in this document should behave the same as upstream
> DocuSeal. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable.

[DocuSeal](https://github.com/docusealco/docuseal) is an open-source platform for filling and signing PDF documents online. Build PDF forms with a drag-and-drop editor, send signing requests to multiple parties, and store completed documents on your own server.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property      | Value                          |
| ------------- | ------------------------------ |
| Image source  | Upstream `docuseal/docuseal` (unmodified) |
| Architectures | x86_64, aarch64                |
| Entrypoint    | Default upstream entrypoint    |

---

## Volume and Data Layout

| Volume     | Mount Point      | Purpose                                                                                          |
| ---------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| `docuseal` | `/data/docuseal` | SQLite database (`db.sqlite3`), `attachments/`, the auto-generated `docuseal.env` (holds `SECRET_KEY_BASE`), and the StartOS `store.json` (holds the selected primary URL) |

`/data/docuseal` is the upstream container `WORKDIR` — the same path the official `docker-compose.yml` bind-mounts. The only StartOS-managed file is `store.json`; everything else lives where upstream puts it. Branding, SMTP credentials, etc. set via the admin UI are stored in encrypted rows in the SQLite DB.

---

## Installation and First-Run Flow

1. Install the package and start the service.
2. Open the Web UI from the StartOS dashboard.
3. Create the initial admin account on the DocuSeal sign-up screen — DocuSeal's standard onboarding flow is used unmodified.

The first boot runs Rails database migrations and generates `SECRET_KEY_BASE` automatically. The Web Interface health check has a grace period for this; it may take up to ~60 seconds before the UI becomes reachable.

**Primary URL:** on first install, StartOS auto-selects the service's `.local` (mDNS) URL as the primary URL DocuSeal uses to build absolute links (signing-request emails, webhook payloads, audit-trail PDFs, API responses). If you want signing-request emails to point at a public address (Tor, custom domain, clearnet), use the **Set Primary URL** action — see below.

---

## Configuration Management

| StartOS-Managed                                                                                                  | Upstream-Managed                                                            |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `APP_URL` (env var) · `SMTP_*` (env vars when SMTP action is set to *system* or *custom*)                        | Branding, signing options, users, storage backend — via DocuSeal's own admin UI |

DocuSeal is **strictly env-var driven** — no YAML/JSON config files, no CLI flags. This package sets these variables on the container:

- **`APP_URL`** — primary URL DocuSeal uses for outbound links. Selected via the *Set Primary URL* action and persisted in `store.json`. When set, env always wins over the DB-stored value (DocuSeal's admin-UI App URL field is hidden).
- **`SMTP_ADDRESS`, `SMTP_PORT`, `SMTP_FROM`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_AUTHENTICATION`, `SMTP_ENABLE_STARTTLS`, `SMTP_ENABLE_SSL`** — set whenever the *Configure SMTP* action is in *system* or *custom* mode. When any `SMTP_*` env is set, DocuSeal's built-in Email/SMTP settings UI is hidden and env wins; setting the action back to *Disabled* unsets all SMTP env vars and re-exposes the upstream UI (which then reads from its own encrypted DB row).

Other notable env vars are deliberately left unset:

- `DATABASE_URL` — unset, so the embedded SQLite default is used.
- `FORCE_SSL` — intentionally **not** set. StartOS terminates TLS at the edge; forcing SSL inside the container would break Tor and plain-HTTP LAN access. (DocuSeal uses the scheme from `APP_URL` directly, so HTTPS URLs are produced correctly when `APP_URL` is an `https://` address.)
- `SECRET_KEY_BASE` — auto-generated by upstream into `/data/docuseal/docuseal.env` on first boot.

### Useful upstream environment variables (not currently exposed)

The following env vars are honored by the upstream image and may be added in future revisions of this package. They are listed here for reference only — none are set today.

| Category | Variable                                                                                                                                                                                          | Notes                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| URLs     | `HOST`, `APP_URL`, `EMAIL_HOST`                                                                                                                                                                   | Control absolute URLs in emailed signing links.                                        |
| SMTP     | `SMTP_ADDRESS`, `SMTP_PORT`, `SMTP_DOMAIN`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_AUTHENTICATION`, `SMTP_FROM`, `SMTP_ENABLE_STARTTLS`, `SMTP_ENABLE_SSL`, `SMTP_ENABLE_TLS`, `SMTP_SSL_VERIFY` | Outbound email; can also be configured in the admin UI.                                |
| Database | `DATABASE_URL` (or `DATABASE_HOST`/`PORT`/`USER`/`PASSWORD`/`NAME`), `RUN_MIGRATIONS`                                                                                                             | Switch to Postgres/MySQL; `RUN_MIGRATIONS=false` skips auto-migrate at boot.           |
| Storage  | `S3_ATTACHMENTS_BUCKET` + `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY`/`AWS_REGION`, `GCS_BUCKET`/`GCS_PROJECT`/`GCS_CREDENTIALS`, `AZURE_CONTAINER`/`AZURE_STORAGE_ACCOUNT_NAME`/`AZURE_STORAGE_ACCESS_KEY`, `ACTIVE_STORAGE_PUBLIC`, `PRESIGNED_URLS_EXPIRE_MINUTES` | Off-volume attachment storage backends.                       |
| Signing  | `CERTS`, `TRUSTED_CERTS`, `TIMESERVER_URL`, `PDF_FORMAT`, `PAGE_QUALITY`                                                                                                                          | PKCS#7 signing certificates / trust anchors / RFC 3161 timestamping.                   |
| Tuning   | `RAILS_MAX_THREADS`, `RAILS_MIN_THREADS`, `WEB_CONCURRENCY`, `SIDEKIQ_THREADS`                                                                                                                    | Puma + Sidekiq concurrency.                                                            |
| Misc     | `SESSION_REMEMBER_DAYS`, `ENCRYPTION_SECRET`, `SIDEKIQ_BASIC_AUTH_PASSWORD`                                                                                                                       | Session lifetime, custom encryption key, Sidekiq web UI auth.                          |

---

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose          |
| --------- | ---- | -------- | ---------------- |
| Web UI    | 3000 | HTTP     | DocuSeal web app |

**Access methods (provided by StartOS):**

- LAN IP with unique port
- `<hostname>.local` with unique port
- Tor `.onion` address
- Custom domains (if configured)

---

## Actions (StartOS UI)

### Set Primary URL

- **Purpose:** select which of the service's reachable URLs DocuSeal should use as the canonical base for outbound links — emailed signing requests, webhook callback URLs, audit-trail PDFs, and absolute URLs returned by the API.
- **Visibility:** always enabled.
- **Availability:** any service status.
- **Inputs:** a dropdown populated from the live HTTP interface — `.local` (mDNS), Tor `.onion`, custom domains, and any LAN/clearnet hostnames you've enabled.
- **Outputs:** writes `APP_URL` into `store.json`. The change is reactive: the daemon restarts automatically so DocuSeal picks up the new env var.

The init flow auto-selects the `.local` URL on fresh installs and silently re-selects the `.local` URL if a previously chosen URL stops being available (e.g., you disabled the Tor gateway or removed a custom domain).

### Configure SMTP

- **Purpose:** configure the SMTP server DocuSeal uses to send signing-request emails, password-reset mails, etc.
- **Visibility:** always enabled.
- **Availability:** any service status.
- **Inputs:** the standard StartOS SMTP composite — *Disabled*, *System* (re-uses your StartOS-wide system SMTP, with optional custom `From:` override), or *Custom* (you provide host/port/from/username/password/security).
- **Outputs:** writes the selection into `store.json`. The change is reactive: the daemon restarts and DocuSeal boots with the new env vars.

When this action is in *system* mode and the StartOS host-level system SMTP credentials are rotated, the new credentials propagate automatically (reactive read of `sdk.getSystemSmtp`); the daemon restarts and DocuSeal picks them up — no need to re-open this action.

When SMTP is *Disabled* (the default), no SMTP env vars are set and DocuSeal's own Email/SMTP settings UI is available — configure SMTP from inside DocuSeal if you prefer that path. While SMTP is in *system* or *custom* mode, DocuSeal's built-in Email/SMTP UI is hidden (env wins).

---

## Backups and Restore

**Included in backup:**

- `docuseal` volume — database, uploaded PDFs, attachment blobs, `SECRET_KEY_BASE`, and the StartOS `store.json` (selected primary URL + SMTP settings)

**Not backed up:** nothing of interest lives outside the volume.

**Restore behavior:** the `docuseal` volume is restored in full before the service starts; DocuSeal then resumes against the restored data with no extra steps.

---

## Health Checks

| Check         | Method                | Grace period | Messages                                                                                          |
| ------------- | --------------------- | ------------ | ------------------------------------------------------------------------------------------------- |
| Web Interface | Port listening (3000) | 90 s         | Success: "The web interface is ready" / Error: "The web interface is not ready"                   |

The grace period covers first-boot Rails migrations and `SECRET_KEY_BASE` generation, during which the port is not yet bound.

---

## Dependencies

None.

---

## Limitations and Differences

1. **SQLite only.** Postgres and MySQL are supported by upstream via `DATABASE_URL`, but no sidecar is wired up here. Suitable for personal / small-team use.
2. **Branding and signing options** are configured exclusively through DocuSeal's own admin UI — no StartOS actions for them yet.
3. **No outbound email by default.** The *Configure SMTP* action defaults to *Disabled*; configure system or custom SMTP via the action (or use DocuSeal's own Email/SMTP UI while the action is *Disabled*).
4. **`APP_URL` and `SMTP_*` env vars override the in-app fields.** While the *Set Primary URL* action is set, DocuSeal hides its "App URL" UI; while *Configure SMTP* is in *system* or *custom* mode, DocuSeal hides its Email/SMTP UI. The env contract always wins over the in-app settings.

---

## What Is Unchanged from Upstream

- The Docker image is the official `docuseal/docuseal`, run as-is — no patched binaries, no overridden entrypoint.
- The DocuSeal admin UI, sign-up flow, template editor, signer flow, REST API, webhooks, and storage layout all behave exactly as documented upstream.
- AGPL-3.0 attribution requirements (see `LICENSE_ADDITIONAL_TERMS`) are preserved — DocuSeal renders its "Powered by DocuSeal" notices unchanged.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: docuseal
architectures: [x86_64, aarch64]
volumes:
  docuseal: /data/docuseal
ports:
  ui: 3000
dependencies: none
startos_managed_env_vars:
  - APP_URL
  - SMTP_ADDRESS
  - SMTP_PORT
  - SMTP_FROM
  - SMTP_USERNAME
  - SMTP_PASSWORD
  - SMTP_AUTHENTICATION
  - SMTP_ENABLE_STARTTLS
  - SMTP_ENABLE_SSL
actions:
  - set-primary-url
  - manage-smtp
```

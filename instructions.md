# DocuSeal

## Documentation

- [DocuSeal documentation](https://www.docuseal.com/docs) — the upstream guide covering the template editor, signing flows, API, and webhooks.

## What you get on StartOS

- A **Web UI** interface running the DocuSeal app, where you build PDF forms, send signing requests, and store completed documents.
- A SQLite database and attachment store kept on the package's own volume; no separate database to configure.
- StartOS-managed primary URL and SMTP wiring, so signing-request emails and webhook callbacks point at the right address.

## Getting set up

1. Open the **Web UI** and create the initial admin account on DocuSeal's sign-up screen. The first launch may take up to a minute while the database is initialised.
2. Run the **Set Primary URL** action and pick the URL you want DocuSeal to use as the canonical base for signing links, webhook callbacks, audit-trail PDFs, and absolute URLs in the API. On a fresh install StartOS pre-selects your `.local` (mDNS) URL — change it if you want signing-request emails to point at a Tor `.onion`, a custom domain, or another address you've enabled on the interface.
3. Run the **Configure SMTP** action if you want DocuSeal to send signing-request, password-reset, and notification emails. Choose **System** to reuse the StartOS-wide SMTP credentials (optionally with a custom `From:` override), **Custom** to supply your own server, or leave it **Disabled** to handle SMTP from inside DocuSeal's own Email/SMTP settings instead.

## Using DocuSeal

Build templates, send signing requests, and manage signers and submissions from the DocuSeal Web UI — see the upstream documentation linked above for the full feature reference.

### Actions

- **Set Primary URL** — change the URL DocuSeal uses to build outbound links. Re-run this whenever you want signing requests and webhooks to point at a different address (e.g. switching from `.local` to a custom domain).
- **Configure SMTP** — switch between **Disabled**, **System**, and **Custom** SMTP. While this action is in **System** or **Custom** mode, DocuSeal's built-in Email/SMTP settings page is hidden and the action's values win; set it back to **Disabled** if you want to manage SMTP from inside DocuSeal instead.

## Limitations

- **SQLite only.** Switching DocuSeal to Postgres or MySQL is supported by upstream but not wired up in this package; this build is intended for personal and small-team use.
- **App URL and SMTP fields inside DocuSeal are hidden when managed here.** Setting a primary URL hides DocuSeal's "App URL" field, and running **Configure SMTP** in **System** or **Custom** mode hides its Email/SMTP settings. Reset the action to **Disabled** (for SMTP) if you want to manage those values from inside DocuSeal.

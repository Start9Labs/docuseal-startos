# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **Setting any `SMTP_*` variable hides DocuSeal's own Email settings screen.** That is upstream behaviour, not ours, and it is why the SMTP action has a Disabled option: it is the only way to hand email configuration back to the application. Don't emit partial SMTP environment.
- **`APP_URL` is re-asserted at init, not just seeded.** `init/setPrimaryUrl.ts` replaces it whenever the stored address is no longer among the interface's published addresses, so a network change cannot leave signing links pointing somewhere unreachable. Keep the check, and keep the `.local` fallback last-resort rather than preferred output.
- **The store is the only writable config surface**, and it is on the same volume as DocuSeal's database. Anything added to it is backed up with the documents.

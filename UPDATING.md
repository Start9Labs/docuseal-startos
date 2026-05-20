# Updating the upstream version

DocuSeal runs the official `docuseal/docuseal` image, pinned by tag in the manifest. The Docker Hub tag tracks the GitHub release tag one-to-one, so either source can be queried.

## Determining the upstream version

- [docusealco/docuseal](https://github.com/docusealco/docuseal) (GitHub releases — source of truth):

  ```
  gh release view -R docusealco/docuseal --json tagName -q .tagName
  ```

- [docuseal/docuseal](https://hub.docker.com/r/docuseal/docuseal) (Docker Hub — what the manifest actually pulls):

  ```
  curl -fsSL "https://hub.docker.com/v2/repositories/docuseal/docuseal/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

Compare against `dockerVersion` in `startos/manifest/index.ts`.

## Applying the bump

- Bump `dockerVersion` in `startos/manifest/index.ts` to the new upstream tag. The image tag is assembled from `dockerImage` (`docuseal/docuseal`) and `dockerVersion` and supplied to the `main` image via `source.dockerTag`.

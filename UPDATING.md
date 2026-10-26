# Updating the upstream version

DocuSeal runs the official `docuseal/docuseal` image, pinned by tag in the manifest. The Docker Hub tag tracks the GitHub release tag one-to-one, so either source can be queried.

## Determining the upstream version

- [docusealco/docuseal](https://github.com/docusealco/docuseal) (GitHub tags — check the newest stable tag, not the "Latest" badge):

  ```
  gh api repos/docusealco/docuseal/tags --paginate --jq '.[].name'
  ```

- [docuseal/docuseal](https://hub.docker.com/r/docuseal/docuseal) (Docker Hub — what the manifest actually pulls):

  ```
  curl -fsSL "https://hub.docker.com/v2/repositories/docuseal/docuseal/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

Compare against `dockerVersion` in `startos/manifest/index.ts`.

## Applying the bump

- Confirm the exact Docker Hub tag is published for both amd64 and arm64 before updating the pin.
- Bump `dockerVersion` in `startos/manifest/index.ts` to the new upstream tag. The image tag is assembled from `dockerImage` (`docuseal/docuseal`) and `dockerVersion` in `source.dockerTag` for the `main` image.
- Update `startos/versions/current.ts` and its localized release notes, following the guide's migration-history rules. Upstream runs its own database migrations at startup; flag any migration cost in the release notes.

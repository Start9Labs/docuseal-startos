import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.5:1',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.1.5.

This release also migrates the package to start-sdk 2.0 (requires StartOS 0.4.0-beta.10 or later).

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.1.5`,
    es_ES: `Actualiza DocuSeal a 3.1.5.

Esta versión también migra el paquete a start-sdk 2.0 (requiere StartOS 0.4.0-beta.10 o posterior).

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.1.5`,
    de_DE: `Aktualisiert DocuSeal auf 3.1.5.

Diese Version stellt das Paket außerdem auf start-sdk 2.0 um (erfordert StartOS 0.4.0-beta.10 oder neuer).

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.1.5`,
    pl_PL: `Aktualizuje DocuSeal do 3.1.5.

Ta wersja przenosi też pakiet na start-sdk 2.0 (wymaga StartOS 0.4.0-beta.10 lub nowszego).

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.1.5`,
    fr_FR: `Met à jour DocuSeal vers 3.1.5.

Cette version fait également passer le paquet à start-sdk 2.0 (nécessite StartOS 0.4.0-beta.10 ou une version ultérieure).

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.1.5`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.7:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.3.7 with bug fixes, security and performance improvements. Requires StartOS 0.4.2 or later. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.7',
    es_ES:
      'Actualiza DocuSeal a 3.3.7 con correcciones de errores y mejoras de seguridad y rendimiento. Requiere StartOS 0.4.2 o posterior. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.3.7',
    de_DE:
      'Aktualisiert DocuSeal auf 3.3.7 mit Fehlerbehebungen sowie Sicherheits- und Leistungsverbesserungen. Erfordert StartOS 0.4.2 oder neuer. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.7',
    pl_PL:
      'Aktualizuje DocuSeal do 3.3.7 z poprawkami błędów oraz ulepszeniami bezpieczeństwa i wydajności. Wymaga StartOS 0.4.2 lub nowszego. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.3.7',
    fr_FR:
      'Met à jour DocuSeal vers 3.3.7 avec des corrections de bugs et des améliorations de sécurité et de performances. Nécessite StartOS 0.4.2 ou une version ultérieure. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.7',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

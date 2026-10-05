import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.1:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.3.1. Adds an IBAN validation option for text fields. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.1',
    es_ES:
      'Actualiza DocuSeal a 3.3.1. Añade una opción de validación de IBAN para los campos de texto. Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.3.1',
    de_DE:
      'Aktualisiert DocuSeal auf 3.3.1. Fügt eine Option zur IBAN-Validierung für Textfelder hinzu. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.1',
    pl_PL:
      'Aktualizuje DocuSeal do 3.3.1. Dodaje opcję walidacji IBAN dla pól tekstowych. Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.3.1',
    fr_FR:
      'Met à jour DocuSeal vers 3.3.1. Ajoute une option de validation IBAN pour les champs de texte. Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

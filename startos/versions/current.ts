import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.3:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.3.3. Adds direct DOCX file uploads in the open-source app. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.3

Adds Forward Email to the SMTP provider presets.`,
    es_ES: `Actualiza DocuSeal a 3.3.3. Añade la carga directa de archivos DOCX en la aplicación de código abierto. Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.3.3

Añade Forward Email a los proveedores SMTP predefinidos.`,
    de_DE: `Aktualisiert DocuSeal auf 3.3.3. Ermöglicht das direkte Hochladen von DOCX-Dateien in der Open-Source-App. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.3

Fügt Forward Email zu den vordefinierten SMTP-Anbietern hinzu.`,
    pl_PL: `Aktualizuje DocuSeal do 3.3.3. Dodaje bezpośrednie przesyłanie plików DOCX w aplikacji o otwartym kodzie źródłowym. Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.3.3

Dodaje Forward Email do predefiniowanych dostawców SMTP.`,
    fr_FR: `Met à jour DocuSeal vers 3.3.3. Ajoute l’envoi direct de fichiers DOCX dans l’application open source. Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.3

Ajoute Forward Email aux fournisseurs SMTP prédéfinis.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

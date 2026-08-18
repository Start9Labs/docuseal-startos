import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.2.1:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.2.1. A small maintenance release.

- Improves extraction of AcroForm fields when importing PDFs.
- The signature validation tool now flags unsigned changes when a document has annotations added after it was signed.

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.2.1`,
    es_ES: `Actualiza DocuSeal a 3.2.1. Una pequeña versión de mantenimiento.

- Mejora la extracción de campos AcroForm al importar archivos PDF.
- La herramienta de validación de firmas ahora señala los cambios sin firmar cuando un documento tiene anotaciones añadidas después de haberse firmado.

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.2.1`,
    de_DE: `Aktualisiert DocuSeal auf 3.2.1. Eine kleine Wartungsversion.

- Verbessert das Auslesen von AcroForm-Feldern beim Importieren von PDFs.
- Das Werkzeug zur Signaturprüfung weist jetzt auf unsignierte Änderungen hin, wenn ein Dokument nach dem Signieren hinzugefügte Anmerkungen enthält.

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.2.1`,
    pl_PL: `Aktualizuje DocuSeal do 3.2.1. Niewielkie wydanie konserwacyjne.

- Ulepsza odczyt pól AcroForm podczas importowania plików PDF.
- Narzędzie do weryfikacji podpisu wskazuje teraz niepodpisane zmiany, gdy dokument zawiera adnotacje dodane po podpisaniu.

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.2.1`,
    fr_FR: `Met à jour DocuSeal vers 3.2.1. Une petite version de maintenance.

- Améliore l'extraction des champs AcroForm lors de l'importation de PDF.
- L'outil de validation de signature signale désormais les modifications non signées lorsqu'un document contient des annotations ajoutées après sa signature.

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.2.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

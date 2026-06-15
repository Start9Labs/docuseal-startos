import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.0:0',
  releaseNotes: {
    en_US: 'Updated DocuSeal to 3.1.0. Adds a document editor to add, remove, reorder, rotate and crop pages; convert uploaded photos to scanned pages; and redact documents with true redaction. Full notes: https://github.com/docusealco/docuseal/releases/tag/3.1.0',
    es_ES: 'Actualiza DocuSeal a 3.1.0. Añade un editor de documentos para agregar, eliminar, reordenar, rotar y recortar páginas; convertir fotos subidas en páginas escaneadas; y redactar documentos con redacción real. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.1.0',
    de_DE: 'Aktualisiert DocuSeal auf 3.1.0. Fügt einen Dokument-Editor zum Hinzufügen, Entfernen, Neuanordnen, Drehen und Zuschneiden von Seiten hinzu; wandelt hochgeladene Fotos in gescannte Seiten um; und schwärzt Dokumente mit echter Schwärzung. Vollständige Hinweise: https://github.com/docusealco/docuseal/releases/tag/3.1.0',
    pl_PL: 'Aktualizuje DocuSeal do 3.1.0. Dodaje edytor dokumentów do dodawania, usuwania, zmiany kolejności, obracania i przycinania stron; konwertuje przesłane zdjęcia na strony skanowane; oraz redaguje dokumenty z prawdziwą redakcją. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.1.0',
    fr_FR: 'Met à jour DocuSeal vers 3.1.0. Ajoute un éditeur de documents pour ajouter, supprimer, réordonner, faire pivoter et rogner des pages ; convertir les photos téléversées en pages scannées ; et caviarder les documents avec un caviardage réel. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.1.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

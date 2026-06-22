import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.1:0',
  releaseNotes: {
    en_US: 'Updated DocuSeal to 3.1.1. Adds a redaction color option to the document editor, improves image preview caching (AWS S3 storage), plus bug fixes and security hardening. Full notes: https://github.com/docusealco/docuseal/releases/tag/3.1.1',
    es_ES: 'Actualiza DocuSeal a 3.1.1. Añade una opción de color de redacción al editor de documentos, mejora el almacenamiento en caché de vistas previas de imágenes (almacenamiento AWS S3), además de correcciones de errores y refuerzo de seguridad. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.1.1',
    de_DE: 'Aktualisiert DocuSeal auf 3.1.1. Fügt dem Dokument-Editor eine Option für die Schwärzungsfarbe hinzu, verbessert das Zwischenspeichern von Bildvorschauen (AWS-S3-Speicher) sowie Fehlerbehebungen und Sicherheitshärtung. Vollständige Hinweise: https://github.com/docusealco/docuseal/releases/tag/3.1.1',
    pl_PL: 'Aktualizuje DocuSeal do 3.1.1. Dodaje opcję koloru redakcji w edytorze dokumentów, poprawia buforowanie podglądów obrazów (magazyn AWS S3) oraz poprawki błędów i wzmocnienie bezpieczeństwa. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.1.1',
    fr_FR: 'Met à jour DocuSeal vers 3.1.1. Ajoute une option de couleur de caviardage à l’éditeur de documents, améliore la mise en cache des aperçus d’images (stockage AWS S3), ainsi que des corrections de bogues et un renforcement de la sécurité. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.1.1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

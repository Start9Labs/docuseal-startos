import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.2:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.3.2. Improves the Add recipients form and reduces peak memory usage when uploading large files. Updated start-sdk to 3.0.6. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.2',
    es_ES:
      'Actualiza DocuSeal a 3.3.2. Mejora el formulario para añadir destinatarios y reduce el consumo máximo de memoria al subir archivos grandes. Actualiza start-sdk a 3.0.6. Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.3.2',
    de_DE:
      'Aktualisiert DocuSeal auf 3.3.2. Verbessert das Formular zum Hinzufügen von Empfängern und reduziert den maximalen Speicherverbrauch beim Hochladen großer Dateien. Aktualisiert start-sdk auf 3.0.6. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.2',
    pl_PL:
      'Aktualizuje DocuSeal do 3.3.2. Ulepsza formularz dodawania odbiorców i zmniejsza szczytowe zużycie pamięci podczas przesyłania dużych plików. Aktualizuje start-sdk do 3.0.6. Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.3.2',
    fr_FR:
      'Met à jour DocuSeal vers 3.3.2. Améliore le formulaire d’ajout de destinataires et réduit le pic de consommation mémoire lors de l’envoi de fichiers volumineux. Met à jour start-sdk vers 3.0.6. Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.2',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.5:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.3.5 with bug fixes and performance improvements. Upstream also adds optional JSON logging and announces an Android app for cloud and self-hosted instances. Updated start-sdk to 3.1.1. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.5',
    es_ES:
      'Actualiza DocuSeal a 3.3.5 con correcciones de errores y mejoras de rendimiento. La versión original también añade registros JSON opcionales y anuncia una aplicación Android para instancias en la nube y autoalojadas. Actualiza start-sdk a 3.1.1. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.3.5',
    de_DE:
      'Aktualisiert DocuSeal auf 3.3.5 mit Fehlerbehebungen und Leistungsverbesserungen. Upstream ergänzt außerdem optionale JSON-Protokollierung und kündigt eine Android-App für Cloud- und selbst gehostete Instanzen an. Aktualisiert start-sdk auf 3.1.1. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.5',
    pl_PL:
      'Aktualizuje DocuSeal do 3.3.5 z poprawkami błędów i ulepszeniami wydajności. Projekt upstream dodaje też opcjonalne logi JSON i ogłasza aplikację na Androida dla instancji w chmurze i samodzielnie hostowanych. Aktualizuje start-sdk do 3.1.1. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.3.5',
    fr_FR:
      'Met à jour DocuSeal vers 3.3.5 avec des corrections de bogues et des améliorations de performances. Le projet amont ajoute aussi une journalisation JSON facultative et annonce une application Android pour les instances dans le cloud et auto-hébergées. Met à jour start-sdk vers 3.1.1. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.5',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

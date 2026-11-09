import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.6:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.3.6 with security patches for third-party dependencies. Document download links created before February 22, 2024 now return 404 because the legacy download endpoint has been removed. Requires StartOS 0.4.1 or later. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.6',
    es_ES:
      'Actualiza DocuSeal a 3.3.6 con parches de seguridad para dependencias de terceros. Los enlaces de descarga de documentos creados antes del 22 de febrero de 2024 ahora devuelven un error 404 porque se ha eliminado el punto de acceso de descarga antiguo. Requiere StartOS 0.4.1 o posterior. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.3.6',
    de_DE:
      'Aktualisiert DocuSeal auf 3.3.6 mit Sicherheitskorrekturen für Drittanbieter-Abhängigkeiten. Vor dem 22. Februar 2024 erstellte Downloadlinks für Dokumente liefern nun einen 404-Fehler, da der alte Download-Endpunkt entfernt wurde. Erfordert StartOS 0.4.1 oder neuer. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.6',
    pl_PL:
      'Aktualizuje DocuSeal do 3.3.6 z poprawkami zabezpieczeń zależności zewnętrznych. Odnośniki do pobierania dokumentów utworzone przed 22 lutego 2024 r. zwracają teraz błąd 404, ponieważ usunięto stary punkt końcowy pobierania. Wymaga StartOS 0.4.1 lub nowszego. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.3.6',
    fr_FR:
      'Met à jour DocuSeal vers 3.3.6 avec des correctifs de sécurité pour les dépendances tierces. Les liens de téléchargement de documents créés avant le 22 février 2024 renvoient désormais une erreur 404, car l’ancien point d’accès de téléchargement a été supprimé. Nécessite StartOS 0.4.1 ou une version ultérieure. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.6',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

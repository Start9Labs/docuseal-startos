import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.4:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.3.4 with refreshed trusted SSL/TLS certificates, bug fixes and performance improvements. The upstream image now includes the eMudhra CA-store fix, replacing the temporary StartOS layer. On first start after updating, a database migration takes a few seconds with fewer than 10,000 submissions, or about 1–2 minutes with 500,000 submissions; allow it to finish. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.4',
    es_ES:
      'Actualiza DocuSeal a 3.3.4 con certificados SSL/TLS de confianza actualizados, correcciones de errores y mejoras de rendimiento. La imagen original ya incluye la corrección de eMudhra en el almacén de certificados y sustituye la capa temporal de StartOS. En el primer inicio tras actualizar, una migración de la base de datos tarda unos segundos con menos de 10.000 envíos o alrededor de 1–2 minutos con 500.000 envíos; espere a que termine. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.3.4',
    de_DE:
      'Aktualisiert DocuSeal auf 3.3.4 mit aktualisierten vertrauenswürdigen SSL/TLS-Zertifikaten, Fehlerbehebungen und Leistungsverbesserungen. Das Upstream-Image enthält die eMudhra-Korrektur im Zertifikatsspeicher und ersetzt die temporäre StartOS-Schicht. Beim ersten Start nach dem Update dauert eine Datenbankmigration mit weniger als 10.000 Einreichungen wenige Sekunden, mit 500.000 etwa 1–2 Minuten; warten Sie, bis sie abgeschlossen ist. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.4',
    pl_PL:
      'Aktualizuje DocuSeal do 3.3.4 z odświeżonymi zaufanymi certyfikatami SSL/TLS, poprawkami błędów i ulepszeniami wydajności. Obraz upstream zawiera już poprawkę magazynu certyfikatów eMudhra, zastępując tymczasową warstwę StartOS. Przy pierwszym uruchomieniu po aktualizacji migracja bazy danych trwa kilka sekund przy mniej niż 10 000 zgłoszeń lub około 1–2 minut przy 500 000 zgłoszeń; poczekaj na jej zakończenie. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.3.4',
    fr_FR:
      'Met à jour DocuSeal vers 3.3.4 avec des certificats SSL/TLS de confiance actualisés, des corrections de bogues et des améliorations de performances. L’image amont inclut désormais le correctif eMudhra du magasin de certificats et remplace la couche temporaire StartOS. Au premier démarrage après la mise à jour, une migration de la base de données prend quelques secondes avec moins de 10 000 soumissions, ou environ 1 à 2 minutes avec 500 000 soumissions ; laissez-la se terminer. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.4',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

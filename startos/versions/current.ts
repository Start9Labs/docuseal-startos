import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.2.2:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.2.2, which also carries the 3.2.1 release.

- Fixes right-to-left text in the audit log PDF.
- Improves extraction of AcroForm fields when importing PDFs.
- The signature validation tool now flags unsigned changes when a document has annotations added after it was signed.
- Assorted bug fixes, performance improvements, and security hardening.

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.2.2`,
    es_ES: `Actualiza DocuSeal a 3.2.2, que también incluye la versión 3.2.1.

- Corrige el texto de derecha a izquierda en el PDF del registro de auditoría.
- Mejora la extracción de campos AcroForm al importar archivos PDF.
- La herramienta de validación de firmas ahora señala los cambios sin firmar cuando un documento tiene anotaciones añadidas después de haberse firmado.
- Varias correcciones de errores, mejoras de rendimiento y refuerzos de seguridad.

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.2.2`,
    de_DE: `Aktualisiert DocuSeal auf 3.2.2, das auch die Version 3.2.1 enthält.

- Behebt die Darstellung von Rechts-nach-links-Text im Prüfprotokoll-PDF.
- Verbessert das Auslesen von AcroForm-Feldern beim Importieren von PDFs.
- Das Werkzeug zur Signaturprüfung weist jetzt auf unsignierte Änderungen hin, wenn ein Dokument nach dem Signieren hinzugefügte Anmerkungen enthält.
- Verschiedene Fehlerbehebungen, Leistungsverbesserungen und Sicherheitshärtungen.

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.2.2`,
    pl_PL: `Aktualizuje DocuSeal do 3.2.2, które zawiera również wydanie 3.2.1.

- Naprawia tekst pisany od prawej do lewej w pliku PDF dziennika audytu.
- Ulepsza odczyt pól AcroForm podczas importowania plików PDF.
- Narzędzie do weryfikacji podpisu wskazuje teraz niepodpisane zmiany, gdy dokument zawiera adnotacje dodane po podpisaniu.
- Różne poprawki błędów, usprawnienia wydajności i wzmocnienia bezpieczeństwa.

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.2.2`,
    fr_FR: `Met à jour DocuSeal vers 3.2.2, qui reprend également la version 3.2.1.

- Corrige le texte de droite à gauche dans le PDF du journal d'audit.
- Améliore l'extraction des champs AcroForm lors de l'importation de PDF.
- L'outil de validation de signature signale désormais les modifications non signées lorsqu'un document contient des annotations ajoutées après sa signature.
- Diverses corrections de bogues, améliorations des performances et renforcements de la sécurité.

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.2.2`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

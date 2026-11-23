import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.4.0:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.4.0, a bug-fix and security-hardening release. It tightens validation of uploaded forms and files, speeds up template lists, and keeps the sender name on emails sent from a custom From address. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.4.0',
    es_ES:
      'Actualiza DocuSeal a 3.4.0, una versión de correcciones y refuerzo de seguridad. Endurece la validación de formularios y archivos subidos, acelera las listas de plantillas y conserva el nombre del remitente en los correos enviados desde una dirección De personalizada. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.4.0',
    de_DE:
      'Aktualisiert DocuSeal auf 3.4.0, ein Release mit Fehlerbehebungen und Sicherheitshärtung. Hochgeladene Formulare und Dateien werden strenger geprüft, Vorlagenlisten laden schneller, und E-Mails von einer benutzerdefinierten Absenderadresse behalten den Absendernamen. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.4.0',
    pl_PL:
      'Aktualizuje DocuSeal do 3.4.0 – wydania z poprawkami błędów i wzmocnieniem bezpieczeństwa. Zaostrza weryfikację przesyłanych formularzy i plików, przyspiesza listy szablonów i zachowuje nazwę nadawcy w wiadomościach wysyłanych z własnego adresu nadawcy. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.4.0',
    fr_FR:
      'Met à jour DocuSeal vers 3.4.0, une version de corrections et de renforcement de la sécurité. Elle renforce la validation des formulaires et fichiers envoyés, accélère les listes de modèles et conserve le nom de l’expéditeur dans les e-mails envoyés depuis une adresse d’expéditeur personnalisée. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.4.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

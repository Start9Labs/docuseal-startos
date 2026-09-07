import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.2.4:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.2.4.

- API callers can now set an email message subject without supplying a body.
- Includes PDF processing and validation fixes, safer page handling, performance improvements, and security hardening.

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.2.4`,
    es_ES: `Actualiza DocuSeal a 3.2.4.

- Los clientes de la API ahora pueden definir el asunto de un mensaje de correo electrónico sin proporcionar un cuerpo.
- Incluye correcciones en el procesamiento y la validación de PDF, un manejo de páginas más seguro, mejoras de rendimiento y refuerzo de la seguridad.

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.2.4`,
    de_DE: `Aktualisiert DocuSeal auf 3.2.4.

- API-Clients können jetzt den Betreff einer E-Mail-Nachricht festlegen, ohne einen Nachrichtentext anzugeben.
- Enthält Korrekturen bei der PDF-Verarbeitung und -Validierung, eine sicherere Seitenverarbeitung, Leistungsverbesserungen und Sicherheitshärtungen.

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.2.4`,
    pl_PL: `Aktualizuje DocuSeal do 3.2.4.

- Klienci API mogą teraz ustawić temat wiadomości e-mail bez podawania jej treści.
- Zawiera poprawki przetwarzania i walidacji plików PDF, bezpieczniejszą obsługę stron, ulepszenia wydajności i wzmocnienie zabezpieczeń.

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.2.4`,
    fr_FR: `Met à jour DocuSeal vers 3.2.4.

- Les clients de l'API peuvent désormais définir l'objet d'un e-mail sans fournir de corps de message.
- Inclut des correctifs de traitement et de validation des PDF, une gestion plus sûre des pages, des améliorations de performances et un renforcement de la sécurité.

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.2.4`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

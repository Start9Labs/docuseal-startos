import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.0:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.3.0.

- The mobile form builder now offers the full set of builder features.
- Navigation is smoother with Rails Turbo 8.
- Includes bug fixes and security hardening.

[Full upstream release notes](https://github.com/docusealco/docuseal/releases/tag/3.3.0)`,
    es_ES: `Actualiza DocuSeal a 3.3.0.

- El editor de formularios móvil ahora ofrece todas sus funciones.
- La navegación es más fluida con Rails Turbo 8.
- Incluye correcciones de errores y mejoras de seguridad.

[Notas de la versión completas](https://github.com/docusealco/docuseal/releases/tag/3.3.0)`,
    de_DE: `Aktualisiert DocuSeal auf 3.3.0.

- Der mobile Formulareditor bietet nun alle Funktionen des Editors.
- Die Navigation läuft mit Rails Turbo 8 flüssiger.
- Enthält Fehlerbehebungen und Sicherheitsverbesserungen.

[Vollständige Versionshinweise](https://github.com/docusealco/docuseal/releases/tag/3.3.0)`,
    pl_PL: `Aktualizuje DocuSeal do 3.3.0.

- Mobilny edytor formularzy udostępnia teraz wszystkie funkcje edytora.
- Nawigacja działa płynniej dzięki Rails Turbo 8.
- Zawiera poprawki błędów i ulepszenia zabezpieczeń.

[Pełne informacje o wydaniu](https://github.com/docusealco/docuseal/releases/tag/3.3.0)`,
    fr_FR: `Met à jour DocuSeal vers 3.3.0.

- L'éditeur de formulaires sur mobile propose désormais toutes ses fonctionnalités.
- La navigation est plus fluide grâce à Rails Turbo 8.
- Inclut des corrections de bogues et des améliorations de sécurité.

[Notes de version complètes](https://github.com/docusealco/docuseal/releases/tag/3.3.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

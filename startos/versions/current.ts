import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.0.3:0',
  releaseNotes: {
    en_US: 'Updated DocuSeal to 3.0.3. Adds Ctrl/Cmd+scroll zoom in the template builder, plus bug fixes, security hardening and performance improvements. Full notes: https://github.com/docusealco/docuseal/releases/tag/3.0.3',
    es_ES: 'Actualiza DocuSeal a 3.0.3. Añade zoom con Ctrl/Cmd+rueda en el editor de plantillas, además de correcciones de errores, refuerzo de seguridad y mejoras de rendimiento. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.0.3',
    de_DE: 'Aktualisiert DocuSeal auf 3.0.3. Fügt Zoom per Strg/Cmd+Mausrad im Vorlagen-Editor hinzu, dazu Fehlerbehebungen, Sicherheitshärtung und Leistungsverbesserungen. Vollständige Hinweise: https://github.com/docusealco/docuseal/releases/tag/3.0.3',
    pl_PL: 'Aktualizuje DocuSeal do 3.0.3. Dodaje powiększanie Ctrl/Cmd+kółko myszy w edytorze szablonów oraz poprawki błędów, wzmocnienie bezpieczeństwa i poprawę wydajności. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.0.3',
    fr_FR: 'Met à jour DocuSeal vers 3.0.3. Ajoute le zoom Ctrl/Cmd+molette dans l’éditeur de modèles, ainsi que des corrections de bugs, un renforcement de la sécurité et des améliorations de performances. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.0.3',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

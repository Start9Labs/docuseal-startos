import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.0.2:0',
  releaseNotes: {
    en_US: 'Bumps DocuSeal to 3.0.2 (bug fixes, performance and security hardening).',
    es_ES: 'Actualiza DocuSeal a 3.0.2 (correcciones de errores, rendimiento y refuerzo de seguridad).',
    de_DE: 'Aktualisiert DocuSeal auf 3.0.2 (Fehlerbehebungen, Leistung und Sicherheitshärtung).',
    pl_PL: 'Aktualizuje DocuSeal do 3.0.2 (poprawki błędów, wydajność i wzmocnienie bezpieczeństwa).',
    fr_FR: 'Met à jour DocuSeal vers 3.0.2 (corrections de bugs, performances et renforcement de la sécurité).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_3_0_1 = VersionInfo.of({
  version: '3.0.1:0',
  releaseNotes: {
    en_US: 'Bumps DocuSeal to 3.0.1 (security improvements).',
    es_ES: 'Actualiza DocuSeal a 3.0.1 (mejoras de seguridad).',
    de_DE: 'Aktualisiert DocuSeal auf 3.0.1 (Sicherheitsverbesserungen).',
    pl_PL: 'Aktualizuje DocuSeal do 3.0.1 (ulepszenia bezpieczeństwa).',
    fr_FR: 'Met à jour DocuSeal vers 3.0.1 (améliorations de sécurité).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

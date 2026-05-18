import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_3_0_0 = VersionInfo.of({
  version: '3.0.0:0',
  releaseNotes: {
    en_US: 'Bumps DocuSeal to 3.0.0.',
    es_ES: 'Actualiza DocuSeal a 3.0.0.',
    de_DE: 'Aktualisiert DocuSeal auf 3.0.0.',
    pl_PL: 'Aktualizuje DocuSeal do 3.0.0.',
    fr_FR: 'Met à jour DocuSeal vers 3.0.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

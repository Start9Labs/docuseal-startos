import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_2_5_3_0_a0 = VersionInfo.of({
  version: '2.5.3:0-alpha.0',
  releaseNotes: {
    en_US: 'Initial release of DocuSeal on StartOS.',
    es_ES: 'Versión inicial de DocuSeal en StartOS.',
    de_DE: 'Erste Veröffentlichung von DocuSeal auf StartOS.',
    pl_PL: 'Pierwsze wydanie DocuSeal w StartOS.',
    fr_FR: 'Version initiale de DocuSeal sur StartOS.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

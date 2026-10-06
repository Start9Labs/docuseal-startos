import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { httpInterfaceId, uiHostId } from './utils'

export const primaryUrl = sdk.setupPrimaryUrl({
  id: 'set-primary-url',
  hostId: uiHostId,
  interfaceId: httpInterfaceId,
  metadata: {
    name: i18n('Set Primary URL'),
    description: i18n(
      'Choose which of your DocuSeal URLs should serve as the primary URL for the purposes of generating signing-request links, webhook callbacks, and absolute URLs in the API.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },
  field: { name: i18n('URL'), description: null },
  get: storeJson.read((s) => s.APP_URL),
  set: (effects, url) => storeJson.merge(effects, { APP_URL: url }),
})

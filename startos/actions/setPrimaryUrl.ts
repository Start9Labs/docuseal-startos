import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { getHttpInterfaceUrls } from '../utils'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  url: Value.dynamicSelect(async ({ effects }) => {
    const systemUrls = await getHttpInterfaceUrls(effects)

    return {
      name: i18n('URL'),
      values: systemUrls.reduce(
        (obj, url) => ({
          ...obj,
          [url]: url,
        }),
        {} as Record<string, string>,
      ),
      default: '',
    }
  }),
})

export const setPrimaryUrl = sdk.Action.withInput(
  'set-primary-url',

  async ({ effects }) => ({
    name: i18n('Set Primary URL'),
    description: i18n(
      'Choose which of your DocuSeal URLs should serve as the primary URL for the purposes of generating signing-request links, webhook callbacks, and absolute URLs in the API.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => ({
    url: (await storeJson.read((s) => s.APP_URL).once()) || undefined,
  }),

  async ({ effects, input }) =>
    storeJson.merge(effects, { APP_URL: input.url }),
)

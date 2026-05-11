import { storeJson } from '../fileModels/store.json'
import { sdk } from '../sdk'
import { getHttpInterfaceUrls } from '../utils'

export const setPrimaryUrl = sdk.setupOnInit(async (effects) => {
  const httpUrls = await getHttpInterfaceUrls(effects)
  const appUrl = await storeJson.read((s) => s.APP_URL).const(effects)

  if (!appUrl || !httpUrls.includes(appUrl)) {
    await storeJson.merge(
      effects,
      {
        APP_URL: httpUrls.find((u) => u.includes('.local')),
      },
      { allowWriteAfterConst: true },
    )
  }
})

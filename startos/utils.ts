import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const uiPort = 3000

// Host id (the `sdk.MultiHost.of` group) — distinct from the interface id
// exported on it. Used for `sdk.host.getOwn` lookups.
export const uiHostId = 'ui-multi'
export const httpInterfaceId = 'ui'

export function getHttpInterfaceUrls(effects: T.Effects): Promise<string[]> {
  return sdk.host
    .getOwn(effects, uiHostId, (host) => {
      const iface =
        host &&
        Object.values(host.bindings)
          .flatMap((b) => Object.values(b.interfaces))
          .find((i) => i.id === httpInterfaceId)
      return iface ? iface.addressInfo.nonLocal.format() : []
    })
    .const()
}

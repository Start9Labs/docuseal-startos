import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const uiPort = 3000

export const httpInterfaceId = 'ui'

export async function getHttpInterfaceUrls(
  effects: T.Effects,
): Promise<string[]> {
  return sdk.serviceInterface
    .getOwn(
      effects,
      httpInterfaceId,
      (i) => i?.addressInfo?.nonLocal.format() || [],
    )
    .const()
}

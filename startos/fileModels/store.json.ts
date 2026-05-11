import { FileHelper, smtpShape, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z
  .object({
    APP_URL: z.string().catch(''),
    smtp: smtpShape,
  })
  .strip()

export const storeJson = FileHelper.json(
  { base: sdk.volumes.docuseal, subpath: './store.json' },
  shape,
)

import { primaryUrl } from '../primaryUrl'
import { sdk } from '../sdk'
import { manageSmtp } from './manageSmtp'

export const actions = sdk.Actions.of()
  .addAction(primaryUrl.action)
  .addAction(manageSmtp)

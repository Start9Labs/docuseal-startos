import { i18n } from '../i18n'
import { primaryUrl } from '../primaryUrl'

export const primaryUrlTask = primaryUrl.setupTask('important', {
  reason: i18n(
    'Choose the URL DocuSeal puts in the signing-request links and webhook callbacks it sends',
  ),
})

export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting DocuSeal!': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The web interface of DocuSeal': 5,

  // actions/setPrimaryUrl.ts
  URL: 6,
  'Set Primary URL': 7,
  'Choose which of your DocuSeal URLs should serve as the primary URL for the purposes of generating signing-request links, webhook callbacks, and absolute URLs in the API.': 8,

  // main.ts (store)
  'store.json not found': 9,

  // actions/manageSmtp.ts
  'Configure SMTP': 10,
  'Configure SMTP credentials for sending signing-request emails. Choose StartOS system SMTP, supply your own server, or disable. While SMTP is managed here, DocuSeal\'s built-in Email/SMTP settings UI is hidden — set this action to "Disabled" if you want to manage SMTP from inside DocuSeal instead.': 11,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict

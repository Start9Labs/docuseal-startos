import { smtpPrefill } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec } = sdk

export const inputSpec = InputSpec.of({
  smtp: sdk.inputSpecConstants.smtpInputSpec,
})

export const manageSmtp = sdk.Action.withInput(
  'manage-smtp',

  async ({ effects }) => ({
    name: i18n('Configure SMTP'),
    description: i18n(
      'Configure SMTP credentials for sending signing-request emails. Choose StartOS system SMTP, supply your own server, or disable. While SMTP is managed here, DocuSeal\'s built-in Email/SMTP settings UI is hidden — set this action to "Disabled" if you want to manage SMTP from inside DocuSeal instead.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => ({
    smtp: smtpPrefill(await storeJson.read((s) => s.smtp).const(effects)),
  }),

  async ({ effects, input }) => storeJson.merge(effects, { smtp: input.smtp }),
)

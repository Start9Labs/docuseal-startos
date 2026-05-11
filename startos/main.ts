import { T } from '@start9labs/start-sdk'
import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting DocuSeal!'))

  const store = await storeJson.read().const(effects)
  if (!store) throw new Error(i18n('store.json not found'))

  const { APP_URL, smtp } = store

  let smtpCredentials: T.SmtpValue | null = null
  if (smtp.selection === 'system') {
    smtpCredentials = await sdk.getSystemSmtp(effects).const()
    const customFrom = smtp.value.customFrom as string | undefined
    if (smtpCredentials && customFrom) smtpCredentials.from = customFrom
  } else if (smtp.selection === 'custom') {
    const p = smtp.value.provider.value
    smtpCredentials = {
      host: p.host,
      port: Number(p.security.value.port),
      from: p.from,
      username: p.username,
      password: p.password,
      security: p.security.selection,
    }
  }

  const smtpEnv = smtpCredentials ? toDocusealSmtpEnv(smtpCredentials) : {}

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'main' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'docuseal',
        subpath: null,
        mountpoint: '/data/docuseal',
        readonly: false,
      }),
      'docuseal-sub',
    ),
    exec: {
      command: sdk.useEntrypoint(),
      env: {
        ...(APP_URL ? { APP_URL } : {}),
        ...smtpEnv,
      },
    },
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The web interface is ready'),
          errorMessage: i18n('The web interface is not ready'),
        }),
      gracePeriod: 90_000,
    },
    requires: [],
  })
})

type DocusealSmtpEnv = {
  SMTP_ADDRESS: string
  SMTP_PORT: string
  SMTP_FROM: string
  SMTP_USERNAME?: string
  SMTP_PASSWORD?: string
  SMTP_AUTHENTICATION?: 'plain'
  SMTP_ENABLE_STARTTLS: 'true' | 'false'
  SMTP_ENABLE_SSL: 'true' | 'false'
}

function toDocusealSmtpEnv(creds: T.SmtpValue): DocusealSmtpEnv {
  const implicitTls = creds.security === 'tls'
  return {
    SMTP_ADDRESS: creds.host,
    SMTP_PORT: String(creds.port),
    SMTP_FROM: creds.from,
    ...(creds.username ? { SMTP_USERNAME: creds.username } : {}),
    ...(creds.password
      ? { SMTP_PASSWORD: creds.password, SMTP_AUTHENTICATION: 'plain' as const }
      : {}),
    SMTP_ENABLE_STARTTLS: implicitTls ? 'false' : 'true',
    SMTP_ENABLE_SSL: implicitTls ? 'true' : 'false',
  }
}

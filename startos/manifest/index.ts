import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

const dockerImage = 'docuseal/docuseal'
const dockerVersion = '3.0.1'

export const manifest = setupManifest({
  id: 'docuseal',
  title: 'DocuSeal',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/Start9Labs/docuseal-startos',
  upstreamRepo: 'https://github.com/docusealco/docuseal',
  marketingUrl: 'https://www.docuseal.com/',
  donationUrl: null,
  description: { short, long },
  volumes: ['docuseal'],
  images: {
    main: {
      source: { dockerTag: `${dockerImage}:${dockerVersion}` },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})

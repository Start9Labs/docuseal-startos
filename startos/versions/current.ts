import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.8:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.3.8, a security release that patches memory management vulnerabilities in the Ruby interpreter. Updating is recommended. Requires StartOS 0.4.2 or later. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.8',
    es_ES:
      'Actualiza DocuSeal a 3.3.8, una versión de seguridad que corrige vulnerabilidades de gestión de memoria en el intérprete de Ruby. Se recomienda actualizar. Requiere StartOS 0.4.2 o posterior. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.3.8',
    de_DE:
      'Aktualisiert DocuSeal auf 3.3.8, ein Sicherheitsupdate, das Schwachstellen in der Speicherverwaltung des Ruby-Interpreters behebt. Das Update wird empfohlen. Erfordert StartOS 0.4.2 oder neuer. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.8',
    pl_PL:
      'Aktualizuje DocuSeal do 3.3.8 – wydania bezpieczeństwa, które usuwa luki w zarządzaniu pamięcią w interpreterze Ruby. Zalecana jest aktualizacja. Wymaga StartOS 0.4.2 lub nowszego. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.3.8',
    fr_FR:
      'Met à jour DocuSeal vers 3.3.8, une version de sécurité qui corrige des vulnérabilités de gestion de la mémoire dans l’interpréteur Ruby. La mise à jour est recommandée. Nécessite StartOS 0.4.2 ou une version ultérieure. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.8',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

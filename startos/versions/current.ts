import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.4:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.1.4.

- Adds a \`PUT /submissions/{id}\` API endpoint for unarchiving or unexpiring submissions.
- Adds a viewer/CC-only party, for recipients who receive a copy of a document without signing it.
- Allows HTML email templates to be edited per submission (Pro).

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.1.4`,
    es_ES: `Actualiza DocuSeal a 3.1.4.

- Añade un punto de conexión de API \`PUT /submissions/{id}\` para desarchivar envíos o anular su caducidad.
- Añade una parte de solo visualización/copia (CC), para destinatarios que reciben una copia del documento sin firmarlo.
- Permite editar las plantillas de correo electrónico HTML por envío (Pro).

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.1.4`,
    de_DE: `Aktualisiert DocuSeal auf 3.1.4.

- Fügt einen \`PUT /submissions/{id}\`-API-Endpunkt hinzu, um Einreichungen zu entarchivieren oder deren Ablauf aufzuheben.
- Fügt eine reine Betrachter-/CC-Partei hinzu, für Empfänger, die eine Kopie des Dokuments erhalten, ohne es zu unterschreiben.
- Ermöglicht die Bearbeitung von HTML-E-Mail-Vorlagen pro Einreichung (Pro).

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.1.4`,
    pl_PL: `Aktualizuje DocuSeal do 3.1.4.

- Dodaje punkt końcowy API \`PUT /submissions/{id}\` do przywracania zgłoszeń z archiwum lub anulowania ich wygaśnięcia.
- Dodaje stronę pełniącą wyłącznie rolę obserwatora/DW, dla odbiorców otrzymujących kopię dokumentu bez jego podpisywania.
- Umożliwia edycję szablonów wiadomości e-mail w formacie HTML dla poszczególnych zgłoszeń (Pro).

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.1.4`,
    fr_FR: `Met à jour DocuSeal vers 3.1.4.

- Ajoute un point de terminaison d'API \`PUT /submissions/{id}\` permettant de désarchiver des soumissions ou d'annuler leur expiration.
- Ajoute une partie en lecture seule/copie (CC), pour les destinataires qui reçoivent une copie du document sans le signer.
- Permet de modifier les modèles d'e-mail HTML par soumission (Pro).

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.1.4`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

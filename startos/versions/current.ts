import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.6:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.1.6.

- Fixes a crash when processing document images with unusual colour channels (such as CMYK or multi-sample TIFFs).
- Optional signature and initials fields are no longer pre-filled, so skipping one no longer submits a signature the signer never entered.
- The signer IP recorded in audit trails is now read only from the \`X-Forwarded-*\` headers set by the StartOS reverse proxy.
- Updated HTML sanitization libraries.

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.1.6`,
    es_ES: `Actualiza DocuSeal a 3.1.6.

- Corrige un fallo al procesar imágenes de documentos con canales de color poco habituales (como CMYK o TIFF multimuestra).
- Los campos opcionales de firma e iniciales ya no se rellenan previamente, de modo que omitir uno ya no envía una firma que el firmante nunca introdujo.
- La IP del firmante registrada en los registros de auditoría ahora se lee únicamente de las cabeceras \`X-Forwarded-*\` que establece el proxy inverso de StartOS.
- Actualiza las bibliotecas de saneamiento de HTML.

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.1.6`,
    de_DE: `Aktualisiert DocuSeal auf 3.1.6.

- Behebt einen Absturz beim Verarbeiten von Dokumentbildern mit ungewöhnlichen Farbkanälen (etwa CMYK oder Mehrfach-Sample-TIFFs).
- Optionale Unterschrifts- und Initialenfelder werden nicht mehr vorausgefüllt; das Überspringen eines solchen Feldes sendet somit keine Unterschrift mehr, die der Unterzeichner nie eingegeben hat.
- Die im Audit-Trail erfasste IP-Adresse des Unterzeichners wird jetzt ausschließlich aus den vom StartOS-Reverse-Proxy gesetzten \`X-Forwarded-*\`-Headern gelesen.
- Aktualisiert die Bibliotheken zur HTML-Bereinigung.

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.1.6`,
    pl_PL: `Aktualizuje DocuSeal do 3.1.6.

- Naprawia awarię podczas przetwarzania obrazów dokumentów o nietypowych kanałach kolorów (np. CMYK lub wielopróbkowych plików TIFF).
- Opcjonalne pola podpisu i inicjałów nie są już wstępnie wypełniane, więc pominięcie takiego pola nie wysyła podpisu, którego podpisujący nigdy nie wprowadził.
- Adres IP podpisującego zapisywany w dzienniku audytu jest teraz odczytywany wyłącznie z nagłówków \`X-Forwarded-*\` ustawianych przez odwrotne proxy StartOS.
- Aktualizuje biblioteki oczyszczania HTML.

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.1.6`,
    fr_FR: `Met à jour DocuSeal vers 3.1.6.

- Corrige un plantage lors du traitement d'images de documents comportant des canaux de couleur inhabituels (comme le CMJN ou les TIFF multi-échantillons).
- Les champs de signature et d'initiales facultatifs ne sont plus préremplis : ignorer l'un d'eux n'envoie donc plus une signature que le signataire n'a jamais saisie.
- L'adresse IP du signataire enregistrée dans les journaux d'audit est désormais lue uniquement depuis les en-têtes \`X-Forwarded-*\` définis par le proxy inverse de StartOS.
- Met à jour les bibliothèques d'assainissement HTML.

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.1.6`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

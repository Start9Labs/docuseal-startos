import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.2.0:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.2.0.

- Fixes a hang when processing PDFs with malformed form fields.
- Signers who have not finished signing can no longer download documents already completed by others.
- The shared-link email verification endpoint now only sends codes for templates that have shared-link two-factor authentication enabled, so it can no longer be used to send mail from your server to arbitrary addresses.
- Improves and localizes date and time formats, including on signature stamps and in the audit trail.

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.2.0`,
    es_ES: `Actualiza DocuSeal a 3.2.0.

- Corrige un bloqueo al procesar archivos PDF con campos de formulario mal formados.
- Quienes firman y aún no han terminado ya no pueden descargar los documentos que otros han completado.
- El punto de acceso de verificación por correo de los enlaces compartidos solo envía códigos para plantillas que tengan activada la autenticación de dos factores del enlace compartido, por lo que ya no puede usarse para enviar correo desde tu servidor a direcciones arbitrarias.
- Mejora y localiza los formatos de fecha y hora, incluidos los sellos de firma y el registro de auditoría.

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.2.0`,
    de_DE: `Aktualisiert DocuSeal auf 3.2.0.

- Behebt ein Hängenbleiben beim Verarbeiten von PDFs mit fehlerhaften Formularfeldern.
- Unterzeichner, die noch nicht fertig unterschrieben haben, können Dokumente, die andere bereits abgeschlossen haben, nicht mehr herunterladen.
- Der E-Mail-Verifizierungsendpunkt für geteilte Links versendet nur noch Codes für Vorlagen mit aktivierter Zwei-Faktor-Authentifizierung für geteilte Links und kann somit nicht mehr genutzt werden, um über Ihren Server E-Mails an beliebige Adressen zu senden.
- Verbessert und lokalisiert Datums- und Zeitformate, auch auf Signaturstempeln und im Prüfprotokoll.

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.2.0`,
    pl_PL: `Aktualizuje DocuSeal do 3.2.0.

- Naprawia zawieszanie się podczas przetwarzania plików PDF z uszkodzonymi polami formularza.
- Osoby podpisujące, które nie zakończyły jeszcze podpisywania, nie mogą już pobierać dokumentów ukończonych wcześniej przez innych.
- Punkt końcowy weryfikacji e-mail dla udostępnionych odnośników wysyła kody wyłącznie dla szablonów z włączonym uwierzytelnianiem dwuskładnikowym udostępnionego odnośnika, więc nie można go już wykorzystać do wysyłania wiadomości z Twojego serwera na dowolne adresy.
- Ulepsza i lokalizuje formaty daty i godziny, również na pieczęciach podpisu i w dzienniku audytu.

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.2.0`,
    fr_FR: `Met à jour DocuSeal vers 3.2.0.

- Corrige un blocage lors du traitement de PDF dont les champs de formulaire sont mal formés.
- Les signataires qui n'ont pas terminé de signer ne peuvent plus télécharger les documents déjà complétés par d'autres.
- Le point d'accès de vérification par e-mail des liens partagés n'envoie plus de codes que pour les modèles dont l'authentification à deux facteurs du lien partagé est activée ; il ne peut donc plus servir à envoyer des e-mails depuis votre serveur vers des adresses arbitraires.
- Améliore et localise les formats de date et d'heure, y compris sur les tampons de signature et dans le journal d'audit.

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.2.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

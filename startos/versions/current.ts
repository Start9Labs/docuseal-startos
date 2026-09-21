import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.2.6:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.2.6, which also includes 3.2.4 and 3.2.5.

- Includes various bug fixes and security improvements from 3.2.6.
- API callers can set an email message subject without supplying a body.
- XLSX exports use less memory and preserve boolean values.
- Delegated signers no longer inherit the previous signer's details, invitation events identify the correct party, and copied fields retain signer roles.
- Filenames containing slashes are handled safely, and archived users no longer receive completion or decline emails.
- Includes PDF handling fixes, stricter webhook header validation, and a loopback-only embedded Redis server.

Full release notes:
- https://github.com/docusealco/docuseal/releases/tag/3.2.4
- https://github.com/docusealco/docuseal/releases/tag/3.2.5
- https://github.com/docusealco/docuseal/releases/tag/3.2.6`,
    es_ES: `Actualiza DocuSeal a 3.2.6, que también incluye las versiones 3.2.4 y 3.2.5.

- Incluye diversas correcciones de errores y mejoras de seguridad de la versión 3.2.6.
- Los clientes de la API pueden definir el asunto de un mensaje de correo electrónico sin proporcionar un cuerpo.
- Las exportaciones XLSX usan menos memoria y conservan los valores booleanos.
- Los firmantes delegados ya no heredan los datos del firmante anterior, los eventos de invitación identifican a la parte correcta y los campos copiados conservan los roles de firmante.
- Los nombres de archivo que contienen barras se gestionan de forma segura y los usuarios archivados ya no reciben correos de finalización o rechazo.
- Incluye correcciones en el manejo de PDF, una validación más estricta de los encabezados de webhook y un servidor Redis integrado limitado a la interfaz local.

Notas de la versión completas:
- https://github.com/docusealco/docuseal/releases/tag/3.2.4
- https://github.com/docusealco/docuseal/releases/tag/3.2.5
- https://github.com/docusealco/docuseal/releases/tag/3.2.6`,
    de_DE: `Aktualisiert DocuSeal auf 3.2.6, einschließlich der Versionen 3.2.4 und 3.2.5.

- Enthält verschiedene Fehlerbehebungen und Sicherheitsverbesserungen aus Version 3.2.6.
- API-Clients können den Betreff einer E-Mail-Nachricht festlegen, ohne einen Nachrichtentext anzugeben.
- XLSX-Exporte benötigen weniger Arbeitsspeicher und behalten boolesche Werte bei.
- Delegierte Unterzeichner übernehmen keine Angaben des vorherigen Unterzeichners mehr, Einladungsereignisse nennen die richtige Partei und kopierte Felder behalten die Unterzeichnerrollen bei.
- Dateinamen mit Schrägstrichen werden sicher verarbeitet und archivierte Benutzer erhalten keine Abschluss- oder Ablehnungs-E-Mails mehr.
- Enthält Korrekturen bei der PDF-Verarbeitung, eine strengere Prüfung von Webhook-Headern und einen ausschließlich lokal erreichbaren eingebetteten Redis-Server.

Vollständige Versionshinweise:
- https://github.com/docusealco/docuseal/releases/tag/3.2.4
- https://github.com/docusealco/docuseal/releases/tag/3.2.5
- https://github.com/docusealco/docuseal/releases/tag/3.2.6`,
    pl_PL: `Aktualizuje DocuSeal do 3.2.6, uwzględniając również wersje 3.2.4 i 3.2.5.

- Zawiera różne poprawki błędów i ulepszenia zabezpieczeń z wersji 3.2.6.
- Klienci API mogą ustawić temat wiadomości e-mail bez podawania jej treści.
- Eksporty XLSX zużywają mniej pamięci i zachowują wartości logiczne.
- Delegowani podpisujący nie dziedziczą już danych poprzedniego podpisującego, zdarzenia zaproszeń wskazują właściwą stronę, a kopiowane pola zachowują role podpisujących.
- Nazwy plików zawierające ukośniki są bezpiecznie obsługiwane, a zarchiwizowani użytkownicy nie otrzymują już wiadomości o ukończeniu lub odrzuceniu.
- Zawiera poprawki obsługi plików PDF, dokładniejszą walidację nagłówków webhooków oraz wbudowany serwer Redis dostępny wyłącznie lokalnie.

Pełne informacje o wydaniu:
- https://github.com/docusealco/docuseal/releases/tag/3.2.4
- https://github.com/docusealco/docuseal/releases/tag/3.2.5
- https://github.com/docusealco/docuseal/releases/tag/3.2.6`,
    fr_FR: `Met à jour DocuSeal vers 3.2.6, qui inclut également les versions 3.2.4 et 3.2.5.

- Inclut diverses corrections de bogues et améliorations de sécurité de la version 3.2.6.
- Les clients de l'API peuvent définir l'objet d'un e-mail sans fournir de corps de message.
- Les exportations XLSX utilisent moins de mémoire et conservent les valeurs booléennes.
- Les signataires délégués n'héritent plus des informations du signataire précédent, les événements d'invitation identifient la bonne partie et les champs copiés conservent les rôles des signataires.
- Les noms de fichiers contenant des barres obliques sont traités en toute sécurité et les utilisateurs archivés ne reçoivent plus les e-mails de finalisation ou de refus.
- Inclut des correctifs de traitement des PDF, une validation plus stricte des en-têtes de webhook et un serveur Redis intégré accessible uniquement en local.

Notes de version complètes :
- https://github.com/docusealco/docuseal/releases/tag/3.2.4
- https://github.com/docusealco/docuseal/releases/tag/3.2.5
- https://github.com/docusealco/docuseal/releases/tag/3.2.6`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

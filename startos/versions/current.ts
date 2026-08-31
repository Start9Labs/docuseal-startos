import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.2.3:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.2.3, which also carries the 3.2.1 and 3.2.2 releases.

- The signature validation tool and the verification API now share one implementation, and the "changed after signing" warning is tied to the most recent valid signature, so documents with several signatures are judged correctly.
- Setting up or removing two-factor authentication is rate-limited on every attempt, not only on failed ones.
- BMP images in uploaded documents decode faster, and outsized ones are rejected instead of exhausting memory.
- Email address typo correction no longer rewrites legitimate addresses at domains that merely resemble a common provider.
- Fixes right-to-left text in the audit log PDF and improves extraction of AcroForm fields when importing PDFs.
- Assorted mobile layout, filter and bug fixes.

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.2.3`,
    es_ES: `Actualiza DocuSeal a 3.2.3, que también incluye las versiones 3.2.1 y 3.2.2.

- La herramienta de validación de firmas y la API de verificación comparten ahora una sola implementación, y el aviso de «modificado tras la firma» se asocia a la firma válida más reciente, de modo que los documentos con varias firmas se evalúan correctamente.
- La configuración y la eliminación de la autenticación de dos factores están limitadas por frecuencia en cada intento, no solo en los fallidos.
- Las imágenes BMP de los documentos subidos se decodifican más rápido y las de tamaño excesivo se rechazan en lugar de agotar la memoria.
- La corrección de erratas en las direcciones de correo ya no reescribe direcciones legítimas en dominios que solo se parecen a un proveedor conocido.
- Corrige el texto de derecha a izquierda en el PDF del registro de auditoría y mejora la extracción de campos AcroForm al importar archivos PDF.
- Varias correcciones de diseño móvil, filtros y errores.

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.2.3`,
    de_DE: `Aktualisiert DocuSeal auf 3.2.3, das auch die Versionen 3.2.1 und 3.2.2 enthält.

- Das Werkzeug zur Signaturprüfung und die Verifizierungs-API nutzen jetzt dieselbe Implementierung, und der Hinweis „nach dem Signieren geändert“ bezieht sich auf die jüngste gültige Signatur, sodass Dokumente mit mehreren Signaturen korrekt bewertet werden.
- Das Einrichten und Entfernen der Zwei-Faktor-Authentifizierung ist bei jedem Versuch ratenbegrenzt, nicht nur bei fehlgeschlagenen.
- BMP-Bilder in hochgeladenen Dokumenten werden schneller dekodiert, und übergroße Bilder werden abgewiesen, statt den Speicher zu erschöpfen.
- Die Tippfehlerkorrektur für E-Mail-Adressen schreibt gültige Adressen bei Domains, die einem bekannten Anbieter nur ähneln, nicht mehr um.
- Behebt die Darstellung von Rechts-nach-links-Text im Prüfprotokoll-PDF und verbessert das Auslesen von AcroForm-Feldern beim Importieren von PDFs.
- Verschiedene Korrekturen an mobilen Layouts, Filtern und Fehlern.

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.2.3`,
    pl_PL: `Aktualizuje DocuSeal do 3.2.3, które zawiera również wydania 3.2.1 i 3.2.2.

- Narzędzie do weryfikacji podpisu i API weryfikacji korzystają teraz z jednej implementacji, a ostrzeżenie „zmieniono po podpisaniu” odnosi się do najnowszego prawidłowego podpisu, dzięki czemu dokumenty z wieloma podpisami są oceniane poprawnie.
- Konfigurowanie i usuwanie uwierzytelniania dwuskładnikowego jest ograniczane częstotliwościowo przy każdej próbie, nie tylko przy nieudanych.
- Obrazy BMP w przesłanych dokumentach dekodują się szybciej, a zbyt duże są odrzucane zamiast wyczerpywać pamięć.
- Poprawianie literówek w adresach e-mail nie przepisuje już prawidłowych adresów w domenach, które jedynie przypominają znanego dostawcę.
- Naprawia tekst pisany od prawej do lewej w pliku PDF dziennika audytu i ulepsza odczyt pól AcroForm podczas importowania plików PDF.
- Różne poprawki układu mobilnego, filtrów i błędów.

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.2.3`,
    fr_FR: `Met à jour DocuSeal vers 3.2.3, qui reprend également les versions 3.2.1 et 3.2.2.

- L'outil de validation de signature et l'API de vérification partagent désormais une seule implémentation, et l'avertissement « modifié après signature » se rapporte à la signature valide la plus récente, si bien que les documents comportant plusieurs signatures sont évalués correctement.
- La configuration et la suppression de l'authentification à deux facteurs sont limitées en fréquence à chaque tentative, et non aux seules tentatives échouées.
- Les images BMP des documents importés sont décodées plus rapidement, et celles de taille excessive sont refusées au lieu d'épuiser la mémoire.
- La correction des fautes de frappe dans les adresses e-mail ne réécrit plus les adresses légitimes sur des domaines qui ressemblent seulement à un fournisseur connu.
- Corrige le texte de droite à gauche dans le PDF du journal d'audit et améliore l'extraction des champs AcroForm lors de l'importation de PDF.
- Diverses corrections de mise en page mobile, de filtres et de bogues.

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.2.3`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.7:0',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.1.7.

- Reworks the web app on phones and small screens: modals now open as full pages, settings get their own navigation, and filters, pagination and layouts have been fixed throughout.
- One-time code fields now bring up the numeric keypad on mobile.
- Setting up or removing two-factor authentication is now rate-limited, making it harder to brute-force the confirmation code.
- Updates Rails to 8.1.3.1, which includes a security fix.

Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.1.7`,
    es_ES: `Actualiza DocuSeal a 3.1.7.

- Rediseña la aplicación web en teléfonos y pantallas pequeñas: las ventanas modales ahora se abren como páginas completas, los ajustes tienen su propia navegación y se han corregido los filtros, la paginación y los diseños en general.
- Los campos de código de un solo uso ahora abren el teclado numérico en el móvil.
- Configurar o eliminar la autenticación de dos factores ahora está limitado por frecuencia, lo que dificulta forzar el código de confirmación por fuerza bruta.
- Actualiza Rails a 8.1.3.1, que incluye una corrección de seguridad.

Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.1.7`,
    de_DE: `Aktualisiert DocuSeal auf 3.1.7.

- Überarbeitet die Web-App auf Telefonen und kleinen Bildschirmen: Modale Fenster öffnen sich nun als vollständige Seiten, die Einstellungen erhalten eine eigene Navigation, und Filter, Seitennummerierung sowie Layouts wurden durchgehend korrigiert.
- Felder für Einmalcodes öffnen auf Mobilgeräten jetzt die numerische Tastatur.
- Das Einrichten und Entfernen der Zwei-Faktor-Authentifizierung ist nun ratenbegrenzt, was das Erraten des Bestätigungscodes per Brute Force erschwert.
- Aktualisiert Rails auf 8.1.3.1, was eine Sicherheitskorrektur enthält.

Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.1.7`,
    pl_PL: `Aktualizuje DocuSeal do 3.1.7.

- Przebudowuje aplikację internetową na telefonach i małych ekranach: okna modalne otwierają się teraz jako pełne strony, ustawienia mają własną nawigację, a filtry, paginacja i układy zostały poprawione w całym interfejsie.
- Pola kodu jednorazowego otwierają teraz klawiaturę numeryczną na urządzeniach mobilnych.
- Konfigurowanie i usuwanie uwierzytelniania dwuskładnikowego jest teraz ograniczane częstotliwościowo, co utrudnia złamanie kodu potwierdzającego metodą siłową.
- Aktualizuje Rails do 8.1.3.1, co obejmuje poprawkę bezpieczeństwa.

Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.1.7`,
    fr_FR: `Met à jour DocuSeal vers 3.1.7.

- Refond l'application web sur téléphones et petits écrans : les fenêtres modales s'ouvrent désormais en pages complètes, les paramètres disposent de leur propre navigation, et les filtres, la pagination et les mises en page ont été corrigés dans l'ensemble.
- Les champs de code à usage unique ouvrent maintenant le clavier numérique sur mobile.
- La configuration et la suppression de l'authentification à deux facteurs sont désormais limitées en fréquence, ce qui complique la recherche du code de confirmation par force brute.
- Met à jour Rails vers 8.1.3.1, ce qui inclut un correctif de sécurité.

Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.1.7`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

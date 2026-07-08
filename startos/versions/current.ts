import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.3:0',
  releaseNotes: {
    en_US:
      'Updated DocuSeal to 3.1.3. Adds the ability to unarchive completed submissions from the submission page menu and font settings for the radio group field type, plus performance optimizations. On the first start after updating, DocuSeal runs an automatic database schema migration that may take a minute or two on very large databases. Full notes: https://github.com/docusealco/docuseal/releases/tag/3.1.3',
    es_ES:
      'Actualiza DocuSeal a 3.1.3. Añade la posibilidad de desarchivar los envíos completados desde el menú de la página de envíos y ajustes de fuente para el tipo de campo de grupo de radio, además de optimizaciones de rendimiento. En el primer inicio tras la actualización, DocuSeal ejecuta una migración automática del esquema de la base de datos que puede tardar uno o dos minutos en bases de datos muy grandes. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.1.3',
    de_DE:
      'Aktualisiert DocuSeal auf 3.1.3. Fügt die Möglichkeit hinzu, abgeschlossene Einreichungen über das Menü der Einreichungsseite zu entarchivieren, sowie Schriftarteinstellungen für den Optionsgruppen-Feldtyp und Leistungsoptimierungen. Beim ersten Start nach der Aktualisierung führt DocuSeal eine automatische Datenbankschema-Migration durch, die bei sehr großen Datenbanken ein bis zwei Minuten dauern kann. Vollständige Hinweise: https://github.com/docusealco/docuseal/releases/tag/3.1.3',
    pl_PL:
      'Aktualizuje DocuSeal do 3.1.3. Dodaje możliwość przywracania z archiwum ukończonych zgłoszeń z menu strony zgłoszeń oraz ustawienia czcionki dla typu pola grupy przycisków radiowych, a także optymalizacje wydajności. Przy pierwszym uruchomieniu po aktualizacji DocuSeal wykonuje automatyczną migrację schematu bazy danych, która w przypadku bardzo dużych baz danych może potrwać minutę lub dwie. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.1.3',
    fr_FR:
      'Met à jour DocuSeal vers 3.1.3. Ajoute la possibilité de désarchiver les soumissions terminées depuis le menu de la page de soumission ainsi que des paramètres de police pour le type de champ de groupe de boutons radio, en plus d’optimisations de performances. Au premier démarrage après la mise à jour, DocuSeal exécute une migration automatique du schéma de base de données qui peut prendre une à deux minutes sur de très grandes bases de données. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.1.3',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

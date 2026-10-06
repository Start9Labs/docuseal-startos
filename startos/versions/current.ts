import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.1:1',
  releaseNotes: {
    en_US: `Updated DocuSeal to 3.3.1. Adds an IBAN validation option for text fields. Full release notes: https://github.com/docusealco/docuseal/releases/tag/3.3.1

- Open UI opens DocuSeal at its primary URL.
- If the primary URL stops being one of DocuSeal's addresses, DocuSeal uses its public domain if it has one, otherwise its .local address, until it returns, and a task asks you to choose another.`,
    es_ES: `Actualiza DocuSeal a 3.3.1. Añade una opción de validación de IBAN para los campos de texto. Notas de la versión completas: https://github.com/docusealco/docuseal/releases/tag/3.3.1

- Abrir interfaz abre DocuSeal en su URL principal.
- Si la URL principal deja de ser una de las direcciones de DocuSeal, DocuSeal usa su dominio público si tiene uno o, si no, su dirección .local, hasta que vuelva, y una tarea le pide elegir otra.`,
    de_DE: `Aktualisiert DocuSeal auf 3.3.1. Fügt eine Option zur IBAN-Validierung für Textfelder hinzu. Vollständige Versionshinweise: https://github.com/docusealco/docuseal/releases/tag/3.3.1

- „Oberfläche öffnen“ öffnet DocuSeal unter seiner primären URL.
- Ist die primäre URL keine Adresse von DocuSeal mehr, verwendet DocuSeal seine öffentliche Domain, falls vorhanden, sonst seine .local-Adresse, bis sie zurückkehrt, und eine Aufgabe fordert Sie auf, eine andere zu wählen.`,
    pl_PL: `Aktualizuje DocuSeal do 3.3.1. Dodaje opcję walidacji IBAN dla pól tekstowych. Pełne informacje o wydaniu: https://github.com/docusealco/docuseal/releases/tag/3.3.1

- „Otwórz interfejs” otwiera DocuSeal pod jego głównym adresem URL.
- Jeśli główny adres URL przestanie być jednym z adresów DocuSeal, DocuSeal używa swojej domeny publicznej, jeśli ją ma, a w przeciwnym razie adresu .local, dopóki nie wróci, a zadanie prosi o wybranie innego.`,
    fr_FR: `Met à jour DocuSeal vers 3.3.1. Ajoute une option de validation IBAN pour les champs de texte. Notes de version complètes : https://github.com/docusealco/docuseal/releases/tag/3.3.1

- Ouvrir l'interface ouvre DocuSeal sur son URL principale.
- Si l'URL principale n'est plus l'une des adresses de DocuSeal, DocuSeal utilise son domaine public s'il en a un, sinon son adresse .local, jusqu'à son retour, et une tâche vous demande d'en choisir une autre.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

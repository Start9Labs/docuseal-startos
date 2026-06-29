import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.2:0',
  releaseNotes: {
    en_US: 'Updated DocuSeal to 3.1.2. Adds page redaction and cropping on touchscreen devices, separates shared test-mode templates into their own folder (no longer returned by the GET /templates API), plus performance optimizations. Full notes: https://github.com/docusealco/docuseal/releases/tag/3.1.2',
    es_ES: 'Actualiza DocuSeal a 3.1.2. Añade la redacción y el recorte de páginas en dispositivos táctiles, separa las plantillas compartidas en modo de prueba en su propia carpeta (ya no las devuelve la API GET /templates) y optimiza el rendimiento. Notas completas: https://github.com/docusealco/docuseal/releases/tag/3.1.2',
    de_DE: 'Aktualisiert DocuSeal auf 3.1.2. Fügt das Schwärzen und Zuschneiden von Seiten auf Touchscreen-Geräten hinzu, trennt freigegebene Vorlagen im Testmodus in einen eigenen Ordner (werden nicht mehr von der GET-/templates-API zurückgegeben) und enthält Leistungsoptimierungen. Vollständige Hinweise: https://github.com/docusealco/docuseal/releases/tag/3.1.2',
    pl_PL: 'Aktualizuje DocuSeal do 3.1.2. Dodaje redakcję i przycinanie stron na urządzeniach dotykowych, wydziela udostępnione szablony w trybie testowym do osobnego folderu (nie są już zwracane przez API GET /templates) oraz wprowadza optymalizacje wydajności. Pełne informacje: https://github.com/docusealco/docuseal/releases/tag/3.1.2',
    fr_FR: 'Met à jour DocuSeal vers 3.1.2. Ajoute le caviardage et le recadrage des pages sur les appareils tactiles, sépare les modèles partagés en mode test dans leur propre dossier (ils ne sont plus renvoyés par l’API GET /templates) et apporte des optimisations de performances. Notes complètes : https://github.com/docusealco/docuseal/releases/tag/3.1.2',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

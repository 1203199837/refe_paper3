# CoAuthor – Where Research Meets Collaboration

Landing page + demo interattiva della piattaforma CoAuthor.

## Avvio locale

Apri `index.html` direttamente nel browser oppure avvia un server statico:

```bash
python3 -m http.server 8000
```

Poi visita `http://localhost:8000`.

## Deploy live con Vercel

### 1) Crea progetto Vercel

1. Vai su [vercel.com](https://vercel.com) e crea/importa il progetto da questo repository.
2. Framework preset: **Other** (sito statico).
3. Root directory: repository root.
4. Build command: lascia vuoto.
5. Output directory: lascia vuoto.

### 2) Recupera gli identificativi necessari

Nel progetto Vercel, recupera:

- `VERCEL_TOKEN` (Account Settings → Tokens)
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Puoi ottenere `ORG_ID` e `PROJECT_ID` anche con CLI:

```bash
vercel login
vercel link
cat .vercel/project.json
```

> Nota: il file `.vercel/project.json` è locale e non va committato.

### 3) Configura GitHub Actions per preview automatiche su PR

Nel repository GitHub imposta questi **Repository Secrets**:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Workflow già incluso: `.github/workflows/vercel-preview.yml`.

Cosa fa automaticamente a ogni pull request:

1. Esegue checkout del branch PR.
2. Installa Vercel CLI.
3. Esegue `vercel pull` in ambiente preview.
4. Esegue `vercel build`.
5. Esegue `vercel deploy --prebuilt`.
6. Pubblica nei commenti della PR il link live della preview.

## File di configurazione Vercel inclusi

- `vercel.json`: configurazione del deployment statico.
- `.vercelignore`: esclude file/cartelle non necessari dal deploy.
- `.github/workflows/vercel-preview.yml`: preview automatica su pull request.

## Cosa include il progetto

- Hero section con value proposition.
- Sezioni problema/soluzione/funzionalità/mercato.
- Demo matching in stile swipe (simulata).
- Design responsive mobile-first.

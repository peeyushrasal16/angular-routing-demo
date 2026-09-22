# Angular Routing Demo — CLI Assignment

Small Angular web application built with **Angular CLI** demonstrating **client-side routing**, **production build**, and **GitHub Pages deployment**.

## Live Demo

After deployment, the app will be available at:

`https://<your-github-username>.github.io/angular-routing-demo/`

## Features

- Angular CLI project with standalone components
- Routing between 4 views: **Home**, **About**, **Products**, **Contact**
- Active link highlighting via `routerLinkActive`
- Wildcard route fallback (`**` → Home)
- Production build with optimization and output hashing
- CI/CD deployment via GitHub Actions → GitHub Pages

## Project Structure

```
src/app/
├── app.routes.ts          # Route definitions
├── app.component.*        # Root shell with router-outlet
├── pages/
│   ├── home/
│   ├── about/
│   ├── products/
│   └── contact/
└── shared/
    └── navbar/            # Navigation with routerLink
```

## Local Development

```bash
npm install
npm start
```

Open `http://localhost:4200` and click navbar links to verify routing.

## Production Build

```bash
npm run build:prod
```

Output: `dist/angular-routing-demo/browser`

## Deploy to GitHub Pages

### 1. Create GitHub repository

1. Create a new repo named `angular-routing-demo` on GitHub
2. Push this project:

```bash
git init
git add .
git commit -m "Angular routing demo with GitHub Pages deployment"
git branch -M main
git remote add origin https://github.com/<username>/angular-routing-demo.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to **Repository → Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. After the workflow runs, your site URL appears on the Pages settings screen

### 3. Update base href (if repo name differs)

If your repo name is not `angular-routing-demo`, update the `--base-href` in:

- `package.json` → `build:ghpages` script
- `.github/workflows/deploy.yml` (uses the npm script)

## Assignment Screenshots

Add screenshots to the `docs/screenshots/` folder:

| File | Description |
|------|-------------|
| `routing-home.png` | Home page with navbar |
| `routing-about.png` | About page (URL shows `/about`) |
| `routing-products.png` | Products page |
| `routing-contact.png` | Contact page |
| `deployed-app.png` | Live deployed application |
| `hosting-dashboard.png` | GitHub Pages settings dashboard |

## Commands Reference

| Command | Purpose |
|---------|---------|
| `npm start` | Dev server |
| `npm run build:prod` | Production build |
| `npm run build:ghpages` | Build for GitHub Pages + 404.html |
| `npm test` | Unit tests |

## Tech Stack

- Angular 19
- Angular Router
- Angular CLI
- GitHub Actions
- GitHub Pages

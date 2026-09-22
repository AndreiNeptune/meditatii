# Site Meditații UNSTPB (Politehnica București)

Acesta este landing page-ul oficial și platforma de conversie pentru serviciile de meditații adresate studenților de la Politehnica București (Geometrie Descriptivă, Analiză Matematică, Mecanică și Desen Tehnic).

## Tech Stack

Acest proiect a fost construit punând accent pe performanță, scalabilitate și un footprint minim de JavaScript:

- **Framework:** [Astro](https://astro.build/) - generare statică ultrarapidă.
- **Styling:** Vanilla CSS (`src/styles/global.css`) - design system complet (dark theme, glassmorphism).
- **Icons:** SVG-uri custom integrate direct ca și componente Astro.
- **Interactivitate:** JavaScript nativ (Vanilla JS) pentru calculator estimativ, acordeon FAQ și meniu de navigare mobil. Fără framework-uri client-side greoaie.

## Arhitectură

Proiectul folosește structura standard Astro:

```
src/
├── components/       # Componente UI reutilizabile (Navbar, Footer, FAQ, Calculator)
│   └── icons/        # SVG-uri extrase ca fișiere `.astro`
├── layouts/          # Layout-uri de bază (BaseLayout.astro cu meta tag-uri SEO)
├── pages/            # Paginile site-ului (routare automată bazată pe fișiere)
│   ├── index.astro   # Homepage
│   └── meditatii-*.astro # Pagini specifice pentru fiecare materie
└── styles/           # Design System (variabile CSS globale, reset, animații)
```

## Quick Start

### 1. Instalare Dependențe

Asigură-te că ai Node.js instalat, apoi rulează:

```bash
npm install
```

### 2. Configurare Variabile de Mediu

Creează un fișier `.env.local` bazat pe șablonul existent:

```bash
cp .env.example .env.local
```
*(Variabilele din `.env.local` nu vor fi comise în git).*

### 3. Rulare Server de Dezvoltare

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:4321`.

### 4. Build pentru Producție

Pentru a genera fișierele statice gata de deploy:

```bash
npm run build
```
Directorul `dist/` va conține toate fișierele optimizate.

# Portfolio (static site)

![MIT license badge](https://img.shields.io/badge/license-MIT-green)

This repository is a static personal portfolio website for Christopher Concannon. The site is implemented with plain HTML, CSS, and JavaScript and is suitable for hosting on GitHub Pages as a user site (`christopherConcannon.github.io`).

Screenshots:
- Homescreen: `assets/images/screenshot.png`
- About: `assets/images/screenshot1.png`
- Portfolio: `assets/images/screenshot2.png`
- Contact: `assets/images/screenshot3.png`

Live demo: https://christopherconcannon.github.io/

---

Contents of interest
- `index.html` — main page markup and site structure
- `assets/css/style.css` + `assets/css/mobile.css` — styles
- `assets/js/main.js` — typewriter effect and mobile menu handler
- `assets/js/smooth-scroll.js`, `assets/js/scroll.js` — scrolling behaviors
- `assets/images/` — screenshots, favicon and other static assets

Quick local preview
1. Using Python (no Node required):
   - `python3 -m http.server 8000`
   - Open `http://localhost:8000`
2. Using Node (recommended if you have Node/npm):
   - `npx serve -s -l 8000`  (SPA fallback, good for single-page apps)
   - or install the VS Code extension **Live Server** and click "Go Live" or right-click `index.html` → "Open with Live Server"

Notes about the contact form
- The contact form in `index.html` is a static form with no `action` (no backend). To make it functional you can:
  1. Use a third-party service (Formspree, Netlify Forms, etc.) and set the form `action` to their endpoint; or
  2. Add a backend (Node/Express, serverless function) to receive and deliver messages.

Publishing with GitHub Pages
- This repository is ready to be served as a user site if the repo is named `christopherConcannon.github.io` (contents are published from the repository root).
- To publish manually: push to the default branch (master/main), then enable Pages in the repository Settings → Pages (choose branch: `/ (root)`).
- If you host this as a project site under `username/repo`, either use the `gh-pages` branch or the `/docs` folder and update asset paths accordingly.

Making automated deploys
- If you want automatic deployment on push, add a GitHub Actions workflow using the official Pages deploy actions and set `path` to the folder you want to publish (for static site this can be `.`).

Contributing
- This is a simple static site. If you'd like to contribute, open an issue or submit a pull request. For code style follow the existing CSS and JS conventions.

License
- MIT — see `LICENSE`

Questions / Contact
- GitHub: `https://github.com/christopherConcannon`
- Email: `cmcon@yahoo.com`

# Wattle & Chai · Class 1 — HTML, CSS & JavaScript

The class files for Class 1. Everything is built around one made-up café, **Wattle & Chai**.

## Live links

- **Class site (start here):** https://wattle-chai-class.vercel.app
- **React café:** https://wattle-chai-react.vercel.app

## What's here

| Folder / file | What it is |
|---|---|
| `index.html` | The class landing page with links to everything below |
| `games/html-toggles.html` | Game: take parts of the HTML away and watch the page change |
| `games/css-toggles.html` | Game: tick and untick lines of CSS, like DevTools |
| `00-html-basics/` | Four small HTML lessons (`01-first-page.html` to `04-styling-in-html.html`) |
| `00-css-basics/` | CSS basics on one café page |
| `01-html-css-js/` | The café menu page in three files: `index.html`, `styles.css`, `script.js`. See its own `README.md` for things to try in DevTools |
| `02-react/` | The same café built with React and Vite |

## Get the files

**Download:** on the GitHub page click the green **Code** button → **Download ZIP**, then unzip it.

**Or clone with Git:**

```bash
git clone https://github.com/bedangatechskills-beep/wattle-chai-frontend.git
```

## Open it in VS Code

1. In VS Code: **File → Open Folder** → choose the `wattle-chai-frontend` folder.
2. Install the **Live Server** extension (Extensions panel → search "Live Server" → Install).
3. Right-click any `.html` file (for example `index.html`) → **Open with Live Server**.
   The page opens in your browser and reloads every time you save.

You can also just double-click an `.html` file to open it in your browser.

## Run the React café on your computer

The React version needs Node.js (version 22 or newer — the LTS from nodejs.org is fine). Check with `node -v`.

```bash
cd 02-react
npm install     # first time only: downloads React and Vite into node_modules
npm run dev     # starts the dev server
```

Open the address it prints (usually http://localhost:5173). Edit a file in `src/`, save, and the page updates straight away. Press `Ctrl + C` in the terminal to stop the server.

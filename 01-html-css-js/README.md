# Wattle & Chai — HTML, CSS and JavaScript

A café menu page built from three separate files. Each file is one layer of the web:

| File | Layer | What it does |
|---|---|---|
| `index.html` | 1 — Structure | What is on the page: headings, cards, buttons |
| `styles.css` | 2 — Style | How it looks: colours, fonts, spacing, layout |
| `script.js` | 3 — Behaviour | What it does: counts your order, switches the theme |

## How to open it

- **Easiest:** double-click `index.html`. It opens in your browser.
- **From VS Code:** File → Open Folder → choose `01-html-css-js`. Then either
  - right-click `index.html` → **Open with Live Server** (needs the Live Server extension; the page reloads every time you save), or
  - right-click `index.html` → **Reveal in File Explorer** (**Reveal in Finder** on a Mac), then open it in Chrome.

Then right-click anywhere on the page → **Inspect** (or press `F12`) to open DevTools.

## Try this in DevTools

1. **Elements:** double-click the heading "Good coffee, every morning" and type your own text. Press Enter.
2. **Elements:** find a `<article class="card">`, change its `data-price` to `99.95`, then click its "Add to order" button. The badge uses your new price.
3. **Styles:** select the `<html>` element, find `:root`, and change `--color-brand` to `purple`. Buttons, the badge and accents all change.
4. **Styles:** select a card, find the `.card` rule, and untick `transition`. Hover the card: it now jumps instead of gliding.
5. **Layout:** in Elements, click the small `grid` label next to `<div class="menu-grid">` to switch the grid overlay on and off.
6. **Console:** type `setTheme('dark')` and press Enter. Then try `setTheme('light')`.
7. **Console:** type `addToOrder('Flat White')`, then type `order` to see the live order object. `clearOrder()` resets it.
8. **Sources:** open the page's files on the left. You will see `index.html`, `styles.css` and `script.js` — the three layers.

Refresh the page and every change disappears: DevTools edits are only in your browser, not in the files.

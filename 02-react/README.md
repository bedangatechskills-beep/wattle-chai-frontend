# Wattle & Chai — the React version

This is the **same café page** you inspected in `01-html-css-js`, rebuilt with **React**.
It looks identical in the browser. The difference shows up when you try to *change* it in DevTools.

## What you need

- **Node.js LTS** — download from <https://nodejs.org> (pick the "LTS" button). Check it worked:
  ```
  node -v
  npm -v
  ```
- **VS Code** and **Google Chrome**.

## Open it in VS Code

1. In VS Code: **File → Open Folder…** and choose this `02-react` folder.
2. Open the built-in terminal: **Terminal → New Terminal** (or <kbd>Ctrl</kbd>+<kbd>`</kbd>).

## Run it

In that terminal:

```
npm install      # first time only: downloads React and Vite into node_modules/
npm run dev      # starts a small local web server
```

The terminal prints a link like `http://localhost:5173/`. <kbd>Ctrl</kbd>+click it (or paste it into Chrome).
Leave the terminal running while you work. Press <kbd>Ctrl</kbd>+<kbd>C</kbd> in it to stop the server.

## Where things live

| File | What it is |
|---|---|
| `index.html` | Almost empty — just `<div id="root">`. React fills it in. |
| `src/main.jsx` | The starting point: tells React to draw `<App />` inside `#root`. |
| `src/App.jsx` | The whole page. Holds the **state**: the order and the theme. |
| `src/components/*.jsx` | The parts of the page: `Header`, `OrderBadge`, `ThemeToggle`, `Hero`, `MenuGrid`, `MenuCard`, `About`, `Visit`, `Footer`. |
| `src/data/menu.js` | The six dishes, as a list of objects (prices are numbers in AUD). |
| `src/money.js` | Turns a number like `5.5` into `"$5.50"`. |
| `src/styles.css` | The same CSS as the plain version — same class names, same colours. |

## Experiments: React vs the plain page in DevTools

Open the page, then open DevTools (<kbd>F12</kbd> or right-click → **Inspect**). Check the **Console** first — there is a hint waiting for you.

### 1. Edit the badge… and watch React put it back
1. **Elements** panel → find `<span id="order-summary">🛒 0 items · $0.00</span>` in the header.
2. Double-click the text and change it to `🛒 99 items · $1.00`. Press Enter. The page shows your edit.
3. Now click **Add to order** on any card.
4. Your edit is gone — the badge says `🛒 1 item · $5.50` (or similar).

**Why?** In the plain page, the HTML *is* the page. In React, the HTML is only an **output**:
React keeps the real data (the `order` state in `App.jsx`) in JavaScript, and every time it changes,
React redraws the badge from that data. Your DevTools edit was never in the data, so it gets thrown away.

### 2. View Page Source shows almost nothing
Right-click the page → **View page source** (<kbd>Ctrl</kbd>+<kbd>U</kbd>).
You'll see no menu, no cards, no header — just `<div id="root"></div>` and a `<script>`.
Compare with the plain version, where the source shows every card.
The **Elements** panel shows the cards because it shows the *live* page *after* JavaScript ran.

### 3. Sources tab shows your .jsx files
**Sources** panel → in the left tree open `localhost:5173` → `src` → `components` → `MenuCard.jsx`.
The browser actually runs converted JavaScript, but **source maps** let DevTools show you the original files you wrote.
You can even click a line number to set a breakpoint, then click **Add to order**.

### 4. React Developer Tools
1. Install the **React Developer Tools** extension from the Chrome Web Store.
2. Reload the page. DevTools now has two new tabs: **⚛️ Components** and **⚛️ Profiler**.
3. **Components** → click `MenuCard` → on the right you see its **props** (`item`: name, price, emoji…).
4. Click `App` → under **hooks** you see two entries both just called **State**, with no names: the first is `[]` (that's `order`, the empty list) and the second is `"light"` (that's `theme`). DevTools shows the values, not the variable names you wrote in `App.jsx`.
5. Double-click `"light"` and type `"dark"` → the whole page switches theme. *That* is editing React the right way: change the state, and React redraws the HTML for you.

### 5. Change the real source → hot reload
1. In VS Code open `src/data/menu.js`.
2. Change the Flat White's `price: 5.5` to `price: 6`. Save (<kbd>Ctrl</kbd>+<kbd>S</kbd>).
3. Look at Chrome — the card updates by itself, without a reload. That's Vite's **hot reload**.

Change something in DevTools → it's temporary. Change something in `src/` → it's real.

## Other commands

```
npm run build    # makes an optimised copy of the site in dist/
npm run preview  # serves that dist/ copy so you can check it
```

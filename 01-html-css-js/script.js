/*
  =====================================================================
  LAYER 3 — BEHAVIOUR (JavaScript)
  JavaScript makes the page DO things: count your order, switch the theme.
  It reads the HTML, listens for clicks, and changes the page.
  Open DevTools → Console and you can call these functions yourself!
  =====================================================================
*/

// ---- The live order (type `order` in the Console to see it) ----
const order = {
  count: 0,
  total: 0,
  items: []
};

// ---- Grab the parts of the page we need ----
const summary = document.querySelector("#order-summary");
const clearButton = document.querySelector("#clear-order");
const themeButton = document.querySelector("#theme-toggle");
const cards = document.querySelectorAll(".card");

// ---- Turn a number like 5.5 into "$5.50" ----
function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

// ---- Show the order in the header badge ----
function updateBadge() {
  const word = order.count === 1 ? "item" : "items";
  summary.textContent = "🛒 " + order.count + " " + word + " · " + formatMoney(order.total);
  clearButton.hidden = order.count === 0;
}

// ---- Add one item, using the name and price stored on its card ----
function addToOrder(itemName) {
  const card = document.querySelector('.card[data-name="' + itemName + '"]');
  if (!card) {
    console.warn("No item called '" + itemName + "' on the menu.");
    return;
  }

  const price = Number(card.dataset.price);
  order.count = order.count + 1;
  order.total = order.total + price;
  order.items.push(itemName);
  updateBadge();

  // Flash "Added ✓" on that card's button for one second
  const button = card.querySelector(".add-btn");
  button.textContent = "Added ✓";
  setTimeout(function () {
    button.textContent = "Add to order";
  }, 1000);
}

function clearOrder() {
  order.count = 0;
  order.total = 0;
  order.items = [];
  updateBadge();
}

// ---- Light / dark theme ----
function setTheme(name) {
  if (name === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeButton.textContent = "☀️";
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeButton.textContent = "🌙";
  }
}

// ---- Listen for clicks ----
cards.forEach(function (card) {
  const button = card.querySelector(".add-btn");
  button.addEventListener("click", function () {
    addToOrder(card.dataset.name);
  });
});

clearButton.addEventListener("click", clearOrder);

themeButton.addEventListener("click", function () {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  setTheme(isDark ? "light" : "dark");
});

// ---- Make these available in the DevTools Console ----
window.order = order;
window.addToOrder = addToOrder;
window.clearOrder = clearOrder;
window.setTheme = setTheme;

console.log(
  "%c☕ G'day from Wattle & Chai! %c\nYou're in the Console — try: setTheme('dark'), addToOrder('Flat White'), order",
  "font-size: 18px; font-weight: bold; color: #d18f00;",
  "font-size: 13px; color: inherit;"
);

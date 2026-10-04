// Turns a number like 5.5 into money text like "$5.50" (always 2 decimals).
export function formatMoney(amount) {
  return '$' + amount.toFixed(2)
}

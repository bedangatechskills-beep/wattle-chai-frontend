// The little "🛒 2 items · $24.50" pill in the header,
// plus a "Clear order" button that only shows up once something is added.
import { formatMoney } from '../money.js'

function OrderBadge({ count, total, onClear }) {
  const word = count === 1 ? 'item' : 'items'
  const summary = `🛒 ${count} ${word} · ${formatMoney(total)}`

  return (
    <div className="order-badge">
      {/* key={summary}: when the text changes, React throws this <span> away and
          draws a fresh one — so anything you typed into it in DevTools disappears. */}
      <span id="order-summary" key={summary}>{summary}</span>
      {count > 0 && (
        <button className="btn btn--small" id="clear-order" type="button" onClick={onClear}>
          Clear order
        </button>
      )}
    </div>
  )
}

export default OrderBadge

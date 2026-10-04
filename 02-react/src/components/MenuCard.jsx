// One dish card. Write it once here — React uses it six times,
// once for every dish in src/data/menu.js.
import { useState } from 'react'
import { formatMoney } from '../money.js'

function MenuCard({ item, onAdd }) {
  // This card's own little memory: did we just click "Add"?
  const [justAdded, setJustAdded] = useState(false)

  function handleAdd() {
    onAdd(item)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1000)
  }

  const tagClass = item.tag === 'Veg' ? 'card__tag card__tag--veg' : 'card__tag'

  // The HTML you see in DevTools is generated from this JSX.
  // In the Elements panel you will see six <article class="card"> blocks,
  // but there is only ONE here. Notice: JSX says className, HTML says class.
  return (
    <article className="card">
      <div className="card__image">{item.emoji}</div>
      <span className={tagClass}>{item.tag}</span>
      <h3 className="card__title">{item.name}</h3>
      <p className="card__text">{item.description}</p>
      <div className="card__footer">
        <span className="card__price">{formatMoney(item.price)}</span>
        <button className="btn btn--primary add-btn" type="button" onClick={handleAdd}>
          {justAdded ? 'Added ✓' : 'Add to order'}
        </button>
      </div>
    </article>
  )
}

export default MenuCard

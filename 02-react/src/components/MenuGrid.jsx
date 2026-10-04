// The "Today's menu" section. It takes the list in src/data/menu.js
// and draws one <MenuCard> for each dish.
import menu from '../data/menu.js'
import MenuCard from './MenuCard.jsx'

function MenuGrid({ onAdd }) {
  return (
    <section className="menu" id="menu">
      <h2>Today's menu</h2>
      <div className="menu-grid">
        {menu.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}

export default MenuGrid

// The top bar: café name, links, the order badge and the light/dark button.
// It does not remember anything itself — App gives it everything as props.
import OrderBadge from './OrderBadge.jsx'
import ThemeToggle from './ThemeToggle.jsx'

function Header({ count, total, onClear, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="logo" href="#">☕ Wattle &amp; Chai</a>

      <nav className="nav">
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#visit">Visit</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <OrderBadge count={count} total={total} onClear={onClear} />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}

export default Header

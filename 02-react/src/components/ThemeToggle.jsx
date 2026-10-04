// The 🌙 / ☀️ button. Clicking it asks App to switch light ↔ dark.
function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
      type="button"
      aria-label="Switch theme"
      onClick={onToggle}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle

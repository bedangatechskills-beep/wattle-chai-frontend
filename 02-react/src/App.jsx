// The whole page. App remembers two things ("state"): what is in the order,
// and whether the page is light or dark. It passes them down to the parts.
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MenuGrid from './components/MenuGrid.jsx'
import About from './components/About.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'

// React runs effects twice in development (StrictMode), so we remember
// whether we have already said hello in the Console.
let saidHello = false

function App() {
  // State: the list of dishes added so far. When it changes, React re-draws the page.
  const [order, setOrder] = useState([])
  const [theme, setTheme] = useState('light')

  // Plain JS would do: document.documentElement.setAttribute(...) inside a click handler.
  // React way: change the `theme` state, and this effect copies it onto <html>.
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  useEffect(() => {
    if (saidHello) return
    saidHello = true
    console.log(
      "%cThis page is React. Try editing the order badge in the Elements panel, then click 'Add to order' — watch React put it back. The real source is src/data/menu.js.",
      'background:#d18f00;color:#2e1c10;padding:6px 10px;border-radius:6px;font-size:13px;font-weight:600',
    )
  }, [])

  function addToOrder(item) {
    setOrder([...order, item])
  }

  function clearOrder() {
    setOrder([])
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Not stored anywhere: worked out fresh from `order` every time React draws.
  // (Prices are numbers, so the total is a number too — e.g. 24.5, shown as "$24.50".)
  const count = order.length
  const total = order.reduce((sum, item) => sum + item.price, 0)

  // The HTML you see in DevTools (Elements panel) is generated from this JSX.
  // Edit the HTML there and React will overwrite it next time state changes.
  // Edit THIS file and the page changes for real.
  return (
    <>
      <Header
        count={count}
        total={total}
        onClear={clearOrder}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <MenuGrid onAdd={addToOrder} />
        <About />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

export default App

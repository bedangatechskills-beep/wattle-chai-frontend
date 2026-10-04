// The big welcome banner at the top of the page.
function Hero() {
  return (
    <section className="hero">
      <p className="hero__tagline">Flat whites, momos and good company · Melbourne</p>
      <h1>Good coffee, every morning</h1>
      <p className="hero__text">
        Locally roasted coffee, a proper Aussie brunch and a warm seat by the window.
        Pull up a chair and stay a while.
      </p>
      <a className="btn btn--primary" href="#menu">See the menu</a>
    </section>
  )
}

export default Hero

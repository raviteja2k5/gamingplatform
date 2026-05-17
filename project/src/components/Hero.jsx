import '../styles/hero.css';

function Hero({ onExplore }) {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <span className="hero-kicker">NovaPlay Presents</span>
        <h1>ENTER THE WORLD OF ELITE GAMING</h1>
        <p>
          Discover premium shooter experiences, trending titles, and
          next-generation action.
        </p>

        <div className="hero-actions">
          <button className="gold-button" type="button" onClick={onExplore}>
            Explore Games
          </button>
          <button className="ghost-button" type="button" onClick={onExplore}>
            Trending Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="hero-kicker">New season · Worldwide delivery</p>
        <h1>
          Everyday essentials,<br /><em>loved everywhere.</em>
        </h1>
        <p className="hero-sub">
          Thoughtfully made goods at honest prices — picked, packed and shipped to your door,
          wherever in the world that happens to be.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#shop">Shop best sellers</a>
          <a className="btn btn-ghost" href="#shop">Browse categories</a>
        </div>
        <ul className="hero-stats">
          <li><strong>4.7★</strong> average rating</li>
          <li><strong>120+</strong> countries served</li>
          <li><strong>30-day</strong> free returns</li>
        </ul>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="tile tile-1"><span>🎧</span></div>
        <div className="tile tile-2"><span>🧴</span></div>
        <div className="tile tile-3"><span>👜</span></div>
        <div className="tile tile-4"><span>🧘</span></div>
        <div className="hero-blob" />
      </div>
    </section>
  );
}

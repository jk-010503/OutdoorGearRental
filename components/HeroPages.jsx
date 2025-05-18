import { Link } from "react-router-dom";

function HeroPages({ name }) {
  return (
    <>
      <section className="hero-pages">
      <div className="hero-pages__overlay" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>

        <div className="container" style={{ textAlign: 'center' }}>
  <div className="hero-pages__text">
  <h3 style={{ fontSize: '8rem' }}>{name}</h3>

    <p>
      <Link to="/">Home</Link> / {name}
    </p>
  </div>
</div>

      </section>
    </>
  );
}

export default HeroPages;

import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-particles"></div>
      <div className="hero-ornament"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">India's Healing & Astrology Platform</div>
          <h1>Consultancy — <span>Tarot Coach</span></h1>
          <p className="hero-text">We provide methods to guard against and eliminate negative energies. Connect with verified
            healers & astrologers for guidance on your past, present, and future.</p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/about" className="btn btn-secondary">About Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

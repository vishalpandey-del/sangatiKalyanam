import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrapper">
            <img src="/images/about_astrologer.jpg" alt="About Sangati Kalyanam" />
            <div className="about-img-border"></div>
          </div>
          <div className="about-content">
            <h3>What We Do</h3>
            <h2>Our Astrologers Work For You</h2>
            <p>Born from the belief that healing is a right, not a privilege. Sangati Kalyanam brings ancient Indian
              healing sciences and astrology to everyone — with verified experts, transparent pricing, and modern tools.
            </p>
            <p>Our platform connects seekers with experienced Vedic astrologers, tarot readers, numerologists, healers,
              and spiritual guides. Whether you need guidance on life decisions, career moves, or personal growth — our
              experts are here to illuminate your path.</p>
            <div className="about-features">
              <div className="about-feature">
                <div className="icon">🧘</div> 200+ Verified Experts
              </div>
              <div className="about-feature">
                <div className="icon">💬</div> Chat · Call · Video
              </div>
              <div className="about-feature">
                <div className="icon">🌐</div> Multilingual Support
              </div>
              <div className="about-feature">
                <div className="icon">🔒</div> Privacy First
              </div>
            </div>
            <Link to="/services" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

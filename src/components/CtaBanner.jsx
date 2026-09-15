import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Ready to Begin Your Healing Journey?</h2>
        <p>Join thousands who've found clarity, calm, and direction through our ancient wisdom and modern platform.</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>
    </section>
  );
}

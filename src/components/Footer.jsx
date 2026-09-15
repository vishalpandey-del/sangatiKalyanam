import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Sangati Kalyanam</h4>
            <p>India's premier healing and astrology platform. Connecting seekers with verified experts across Vedic
              Astrology, Tarot, Numerology, Reiki, Vastu, and more.</p>
            <div className="footer-social">
              <a href="#" title="Instagram">📸</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Future Forecast</Link></li>
              <li><Link to="/services">Life Situation</Link></li>
              <li><Link to="/services">Career & Finance</Link></li>
              <li><Link to="/services">Personal Advice</Link></li>
              <li><Link to="/services">Annual Forecast</Link></li>
              <li><Link to="/services">Consultation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="contact-info">info@sangatiKalyanam.com</div>
            <div className="contact-info">+91 98765 43210</div>
            <div className="contact-info">Hyderabad, India</div>
            <div className="contact-info">Mon–Sat, 9 AM–9 PM</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 <span>Sangati Kalyanam</span>. All Rights Reserved. · Healing & Astrology Platform</p>
        </div>
      </div>
    </footer>
  );
}

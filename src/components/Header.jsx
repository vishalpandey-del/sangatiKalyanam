import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-inner">
        <div className="logo">
          <Link to="/"><img src="/images/logo.jpg" alt="Sangati Kalyanam Logo" style={{height: '55px', borderRadius: '50%'}} /></Link>
        </div>
        <nav id="main-nav" className={menuOpen ? 'open' : ''}>
          <ul>
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/zodiac" onClick={() => setMenuOpen(false)}>Zodiac</NavLink></li>
            <li><NavLink to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</NavLink></li>
            <li><NavLink to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</NavLink></li>
            <li><NavLink to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
          </ul>
        </nav>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

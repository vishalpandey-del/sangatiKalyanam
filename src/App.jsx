import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ZodiacPage from './pages/ZodiacPage';
import PricingPage from './pages/PricingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Back to top visibility
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp .8s ease-out both';
          entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.service-card, .zodiac-card, .counter-card, .feature-card, .gift-card, .pricing-card, .testimonial-card');
      elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.dataset.delay = (i % 6) * 0.1 + 's';
        observer.observe(el);
      });
    };
    
    observeElements();
    // Re-observe when DOM mutates (because of routing)
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/zodiac" element={<ZodiacPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      <Footer />
      
      {/* Back To Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
      >
        ↑
      </button>
    </Router>
  );
}

export default App;

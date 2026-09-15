import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80',
      title: 'Forecast of Future Events',
      desc: 'Unlock the mysteries of your future through ancient Vedic astrology. Our expert astrologers analyze planetary positions.',
      features: [
        'Detailed Birth Chart Analysis',
        'Dasha & Transit Predictions',
        'Major Life Milestones Timeline',
        'Auspicious Dates & Mahurats'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      title: 'Current Life Situation',
      desc: 'Understand the cosmic influences shaping your present. Get clarity on challenges, opportunities, and energies.',
      features: [
        'Present Planetary Influences',
        'Obstacle Identification & Remedies',
        'Spiritual Growth Assessment',
        'Immediate Guidance & Solutions'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      title: 'Work, Career, Finance',
      desc: 'Discover astrological insights for professional growth and financial prosperity. Align decisions with cosmic timing.',
      features: [
        'Career Path & Profession Selection',
        'Financial Prosperity Periods',
        'Business & Investment Timing',
        'Remedies for Financial Growth'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=600&q=80',
      title: 'Personal Life Advice',
      desc: 'Navigate love, relationships, and personal growth with celestial guidance. Understand compatibility and timing.',
      features: [
        'Marriage & Compatibility Matching',
        'Relationship Conflict Resolution',
        'Family Dynamics & Solutions',
        'Personal Growth & Well-being'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1506784951279-d94412f4cef2?auto=format&fit=crop&w=600&q=80',
      title: 'Annual Forecast',
      desc: 'Get a comprehensive year-ahead reading covering all major life areas. Prepare for the cosmic cycles.',
      features: [
        'Month-by-Month Predictions',
        'Key Highlights of the Year',
        'Health, Wealth & Relationship',
        'Specific Annual Remedies (Varshphal)'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      title: 'General Consultation',
      desc: 'One-on-one sessions with experienced astrologers for questions about life, spirituality, and well-being.',
      features: [
        'Open Q&A with Expert Astrologer',
        'Customized Spiritual Remedies',
        'Quick Dosha Checks',
        'Guidance on Specific Questions'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
      title: '1-on-1 Consultation',
      desc: 'Chat, voice, or video consult with verified healers and astrologers. Per-minute billing ensures you only pay for what you need.',
      features: [
        '200+ Verified Experts',
        'Chat, Call, or Video',
        '100% Privacy Guaranteed',
        'Instant Connectivity'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
      title: 'Wallet & Transactions',
      desc: 'Seamlessly recharge your integrated wallet once and spend across sessions, courses, and webinars without repeated payments.',
      features: [
        'Secure Payment Gateway',
        'Instant Recharge & Refunds',
        'Transparent Billing',
        'Exclusive Cashback Offers'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80',
      title: 'Live Webinars',
      desc: 'Join group healing sessions, meditation workshops, and expert spiritual talks from the comfort of your home.',
      features: [
        'Interactive Q&A Sessions',
        'Group Energy Healing',
        'Session Recordings Included',
        'Completion Certificates'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
      title: 'Video Courses',
      desc: 'Learn astrology, tarot reading, and healing practices through our self-paced recorded video courses.',
      features: [
        'Self-Paced Learning',
        'Lifetime Access',
        'Expert Curated Content',
        'Beginner to Advanced'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80',
      title: 'Wellness Products',
      desc: 'Shop authentic and energized spiritual tools including crystals, singing bowls, rudraksha, and incense.',
      features: [
        'Authentic Crystals & Stones',
        'Energized by Experts',
        'Pan-India Delivery',
        'Easy Return Policy'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      title: 'Multilingual Platform',
      desc: 'Experience our platform and connect with experts in your native language for deeper understanding and comfort.',
      features: [
        'Hindi & English Support',
        'Regional Expert Matching',
        'Localized Content',
        'More Languages Coming Soon'
      ]
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  if (selectedService) {
    return (
      <section className="service-detail-view" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-head">
            <h3>Service Details</h3>
            <h2><span>{selectedService.title.split(' ')[0]}</span> {selectedService.title.substring(selectedService.title.indexOf(' ') + 1)}</h2>
            <div className="section-divider"></div>
          </div>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', marginTop: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
              <img src={selectedService.img} alt={selectedService.title} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <p style={{ fontSize: '18px', color: 'var(--text)', lineHeight: '1.8', marginBottom: '24px' }}>
                {selectedService.desc}
              </p>
              <div style={{ marginBottom: '30px', fontSize: '16px', color: 'var(--text-light)', lineHeight: '2' }}>
                {selectedService.features.map((feature, idx) => (
                  <div key={idx}><span style={{ color: 'var(--gold)', marginRight: '6px' }}>✦</span>{feature}</div>
                ))}
              </div>
              <button className="btn btn-primary" onClick={() => alert('Booking system coming soon!')}>Book Now</button>
              <button className="btn btn-secondary" onClick={handleBack} style={{ marginLeft: '12px' }}>← Back</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <h3>Our Services</h3>
          <h2>Astrology Is Just A Finger <span>Pointing At Reality</span></h2>
          <div className="section-divider"></div>
        </div>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx} onClick={() => handleServiceClick(service)}>
              <div className="service-img">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-overlay">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <div className="service-details">
                  {service.features.map((feature, i) => (
                    <div key={i}><span style={{ color: 'var(--gold)', marginRight: '6px' }}>✦</span>{feature}</div>
                  ))}
                </div>
                <div className="coming-soon-badge">Coming Soon</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

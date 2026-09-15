export default function Testimonials() {
  const testimonials = [
    { avatar: '🌙', quote: '"My session completely changed how I see my birth chart. The predictions were incredibly accurate and the guidance was life-changing!"', name: 'Anjali M.', subtitle: 'Vedic Astrology · 25 min session' },
    { avatar: '🧘', quote: '"The chakra balancing session was deeply calming and transformative. I felt an incredible shift in my energy afterwards."', name: 'Karan S.', subtitle: 'Healing Session · Mumbai' },
    { avatar: '🃏', quote: '"Amazing tarot reading experience! The reader was so intuitive and accurate. Looking forward to my next session."', name: 'Rohini P.', subtitle: 'Tarot Reading · Delhi' }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <h3>What People Say</h3>
          <h2>Client <span>Testimonials</span></h2>
          <div className="section-divider"></div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-avatar">{t.avatar}</div>
              <div className="t-quote">❝</div>
              <p>{t.quote}</p>
              <h5>{t.name}</h5>
              <h6>{t.subtitle}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

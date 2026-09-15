export default function Features() {
  const features = [
    { icon: '🔮', title: 'Vedic Astrology', desc: 'Authentic Jyotish readings based on ancient Indian wisdom, planetary positions, and birth chart analysis.' },
    { icon: '🃏', title: 'Tarot Reading', desc: 'Intuitive tarot card guidance for love, career, health, and spiritual questions from certified readers.' },
    { icon: '🔢', title: 'Numerology', desc: 'Discover the hidden power of numbers in your name, birth date, and life path for complete guidance.' },
    { icon: '🌿', title: 'Reiki Healing', desc: 'Energy healing sessions to balance chakras, reduce stress, and promote physical and spiritual wellness.' },
    { icon: '🧿', title: 'Vastu Shastra', desc: 'Harmonize your living and workspace with Vastu principles for prosperity, health, and positive energy.' },
    { icon: '🧘', title: 'Meditation & Breathwork', desc: 'Guided meditation and pranayama sessions for inner peace, mental clarity, and spiritual awakening.' }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-head">
          <h3>Why Choose Us</h3>
          <h2>Our Unique <span>Features</span></h2>
          <div className="section-divider"></div>
        </div>
        <div className="features-grid">
          {features.map((f, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

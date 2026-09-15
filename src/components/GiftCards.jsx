export default function GiftCards() {
  const cards = [
    { img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', title: 'Cancer', desc: 'Nurturing, intuitive, and deeply connected to emotions. Discover what the stars have in store for Cancer signs this year.' },
    { img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', title: 'Gemini', desc: 'Curious, adaptable, and communicative. Explore Gemini\'s cosmic journey through celestial wisdom and planetary guidance.' },
    { img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80', title: 'Aquarius', desc: 'Innovative, humanitarian, and visionary. Unlock Aquarius\'s potential through astrological insights and star readings.' }
  ];

  return (
    <section className="gift-cards">
      <div className="container">
        <div className="section-head">
          <h3>Free Astrological Express Consultation</h3>
          <h2>Gift <span>Card</span></h2>
          <div className="section-divider"></div>
        </div>
        <div className="gift-grid">
          {cards.map((c, idx) => (
            <div className="gift-card" key={idx}>
              <img src={c.img} alt={`${c.title} Gift Card`} />
              <div className="gift-card-overlay">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

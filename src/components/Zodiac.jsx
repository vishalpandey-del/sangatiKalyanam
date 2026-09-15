export default function Zodiac() {
  const zodiacs = [
    { icon: '♈', name: 'Aries' },
    { icon: '♉', name: 'Taurus' },
    { icon: '♊', name: 'Gemini' },
    { icon: '♋', name: 'Cancer' },
    { icon: '♌', name: 'Leo' },
    { icon: '♍', name: 'Virgo' },
    { icon: '♎', name: 'Libra' },
    { icon: '♏', name: 'Scorpio' },
    { icon: '♐', name: 'Sagittarius' },
    { icon: '♑', name: 'Capricorn' },
    { icon: '♒', name: 'Aquarius' },
    { icon: '♓', name: 'Pisces' }
  ];

  return (
    <section className="zodiac" id="zodiac">
      <div className="container">
        <div className="section-head">
          <h3>Each Zodiac Symbol Says Something</h3>
          <h2>Zodiac <span>Symbols</span></h2>
          <div className="section-divider"></div>
        </div>
        <div className="zodiac-grid">
          {zodiacs.map((z, idx) => (
            <div className="zodiac-card" key={idx}>
              <div className="z-icon">{z.icon}</div>
              <h4>{z.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Counters() {
  const counters = [
    { num: '95+', label: 'Countries' },
    { num: '80+', label: 'Astrologers' },
    { num: '10+', label: 'Years' },
    { num: '70+', label: 'Partners' }
  ];

  return (
    <section className="counters">
      <div className="container">
        <div className="counters-grid">
          {counters.map((c, idx) => (
            <div className="counter-card" key={idx}>
              <div className="counter-num">{c.num}</div>
              <div className="counter-label">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  const plans = [
    { name: 'Basic Plan', price: '₹499', features: ['1 Consultation Session', 'Birth Chart Analysis', 'Email Support', 'Basic Predictions', '30-Minute Session'] },
    { name: 'Premium Plan', price: '₹999', features: ['3 Consultation Sessions', 'Detailed Birth Chart', 'Priority Support', 'Annual Forecast', '60-Minute Sessions'] },
    { name: 'VIP Plan', price: '₹1999', features: ['Unlimited Sessions', 'Complete Life Reading', '24/7 Support', 'All Remedies Included', '90-Minute Sessions'] }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <h3>Affordable Plans</h3>
          <h2>Our <span>Pricing</span></h2>
          <div className="section-divider"></div>
        </div>
        <div className="pricing-grid">
          {plans.map((p, idx) => (
            <div className="pricing-card" key={idx}>
              <h4>{p.name}</h4>
              <div className="pricing-price"><span>{p.price}</span></div>
              <ul>
                {p.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <button className="pricing-btn coming-soon-badge" style={{animation: 'none'}}>Coming Soon</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

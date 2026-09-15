export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will notify you when we launch.');
  };

  return (
    <section className="newsletter" id="contact">
      <div className="container">
        <h2>Stay Connected</h2>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email address..." required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

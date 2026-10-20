export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <div className="footer-brand">
          <p className="logo logo-footer">velora<span className="logo-dot">.</span></p>
          <p className="footer-tag">Quality everyday essentials, shipped worldwide with care.</p>
        </div>
        <nav className="footer-cols" aria-label="Footer">
          <div>
            <h4>Shop</h4>
            <a href="#shop">New arrivals</a>
            <a href="#shop">Best sellers</a>
            <a href="#shop">Gift ideas</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#shop">Shipping &amp; returns</a>
            <a href="#shop">Track order</a>
            <a href="#shop">Contact us</a>
          </div>
        </nav>
      </div>
      <div className="container footer-base">
        <p>© {new Date().getFullYear()} Velora Demo. Built for a frontend take-home exercise.</p>
        <p className="footer-pay" aria-label="Accepted payment methods">VISA · Mastercard · AMEX · PayPal · Apple Pay</p>
      </div>
    </footer>
  );
}

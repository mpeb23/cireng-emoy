class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1f2937;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        .footer-about {
          margin-bottom: 1.5rem;
        }
        .footer-heading {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #e5e7eb;
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          background: #4f46e5;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }
        .social-links a:hover {
          background: #6366f1;
        }
        .copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about-col">
            <div class="footer-logo">
              <i data-feather="coffee" class="footer-logo-icon"></i>
              Gourmet Bites
            </div>
            <p class="footer-about">
              Premium quality food delivered to your doorstep. Crafted by master chefs with love and care.
            </p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
            </div>
          </div>
          <div class="footer-links-col">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/menu.html">Menu</a></li>
              <li><a href="/testimonials.html">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-contact-col">
            <h3 class="footer-heading">Contact Us</h3>
            <ul class="footer-links">
              <li><i data-feather="map-pin"></i> 123 Food Street, Culinary City</li>
              <li><i data-feather="phone"></i> (123) 456-7890</li>
              <li><i data-feather="mail"></i> hello@gourmetbites.com</li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2023 Gourmet Bites Delight. All rights reserved.</p>
        </div>
      </footer>
    `;
    
    // Initialize feather icons in shadow DOM
    const featherScript = document.createElement('script');
    featherScript.src = 'https://unpkg.com/feather-icons';
    this.shadowRoot.appendChild(featherScript);
    featherScript.onload = () => {
      if (window.feather) {
        window.feather.replace();
      }
    };
  }
}
customElements.define('custom-footer', CustomFooter);

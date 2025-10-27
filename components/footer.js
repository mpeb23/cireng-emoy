class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1a202c;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #f59e0b;
        }
        .footer-section p {
          margin-bottom: 0.5rem;
          color: #a0aec0;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icons a {
          color: white;
          transition: color 0.3s ease;
        }
        .social-icons a:hover {
          color: #f59e0b;
        }
        .copyright {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #2d3748;
          color: #a0aec0;
          font-size: 0.9rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Tentang Kami</h3>
            <p>CirengCraze Express menyajikan cireng dengan cita rasa Emoy PHP yang unik dan berbeda.</p>
          </div>
          <div class="footer-section">
            <h3>Kontak</h3>
            <p><i data-feather="map-pin"></i> Jl. PHP Developer No. 42, Bandung</p>
            <p><i data-feather="phone"></i> +62 812-3456-7890</p>
            <p><i data-feather="mail"></i> cireng@emoyphp.com</p>
          </div>
          <div class="footer-section">
            <h3>Sosial Media</h3>
            <div class="social-icons">
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} CirengCraze Express. All rights reserved.
        </div>
      </footer>
    `;
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);

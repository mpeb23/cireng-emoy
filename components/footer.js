class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
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
          color: #fef3c7;
        }
        .footer-section p, .footer-section a {
          color: #e2e8f0;
          margin-bottom: 0.5rem;
          display: block;
        }
        .footer-section a:hover {
          color: white;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icons a {
          color: white;
          background: rgba(255,255,255,0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .social-icons a:hover {
          background: #f97316;
          transform: translateY(-3px);
        }
        .copyright {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.9rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Tentang Kami</h3>
            <p>Cireng Craze Delight menyajikan cireng isi premium dengan bahan pilihan dan racikan bumbu istimewa.</p>
          </div>
          <div class="footer-section">
            <h3>Kontak</h3>
            <a href="tel:+6281234567890"><i data-feather="phone"></i> +62 812-3456-7890</a>
            <a href="mailto:info@cirengcraze.com"><i data-feather="mail"></i> info@cirengcraze.com</a>
          </div>
          <div class="footer-section">
            <h3>Jam Operasional</h3>
            <p>Setiap Hari</p>
            <p>09.00 - 21.00 WIB</p>
          </div>
          <div class="footer-section">
            <h3>Sosial Media</h3>
            <div class="social-icons">
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2024 Cireng Craze Delight. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);

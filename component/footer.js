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
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #f97316;
        }
        p {
          margin-bottom: 1rem;
          color: #d1d5db;
          line-height: 1.6;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .social-links a {
          color: white;
          background: #374151;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }
        .social-links a:hover {
          background: #f97316;
        }
        .copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
        }
        @media (max-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Tentang Cireng Emoy</h3>
            <p>Kami menyediakan cireng dengan kualitas terbaik dan rasa yang nikmat. Dibuat dengan bahan-bahan pilihan dan diolah dengan penuh cinta.</p>
          </div>
          
          <div class="footer-section">
            <h3>Kontak Kami</h3>
            <div class="contact-item">
              <i data-feather="map-pin"></i>
              <p>Jl. Cireng Raya No. 123, Bandung</p>
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              <p>+62 812-3456-7890</p>
            </div>
            <div class="contact-item">
              <i data-feather="mail"></i>
              <p>hello@cirengemoy.com</p>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Jam Buka</h3>
            <p>Senin - Jumat: 09.00 - 20.00</p>
            <p>Sabtu - Minggu: 10.00 - 22.00</p>
            
            <div class="social-links">
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
            </div>
          </div>
        </div>
        
        <div class="copyright">
          <p>&copy; 2023 Cireng Emoy. All Rights Reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
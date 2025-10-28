class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
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
          color: #064e3b; /* hijau tua untuk kontras */
          font-weight: bold;
        }
        .footer-section p {
          margin-bottom: 0.5rem;
          color: #e0f2e9;
          line-height: 1.6;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icons a {
          color: white;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          padding: 0.5rem;
          border-radius: 50%;
        }
        .social-icons a:hover {
          background: white;
          color: #22c55e;
          transform: scale(1.1);
        }
        .copyright {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.3);
          color: #f0fdf4;
          font-size: 0.9rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          footer {
            text-align: center;
          }
          .footer-content {
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
        }
      </style>

      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Tentang Kami</h3>
            <p>Cireng Emoy menyajikan cireng gurih, kenyal, dan pedas — dibuat <strong>home made</strong> dengan bahan pilihan terbaik.</p>
          </div>

          <div class="footer-section">
            <h3>Kontak</h3>
            <p><i data-feather="map-pin"></i> Perum Sadjati Garden City 3 Blok A No. 21, Pangulah Utara, Kotabaru, Karawang</p>
            <p><i data-feather="phone"></i> +62 812-3456-7890</p>
            <p><i data-feather="mail"></i> pebrianaherak23@gmail.com</p>
          </div>

          <div class="footer-section">
            <h3>Sosial Media</h3>
            <div class="social-icons">
              <a href="https://www.instagram.com/familysnackkrw?igsh=c3N1M3M4bmh1cDJi" target="_blank"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
        </div>

        <div class="copyright">
          &copy; ${new Date().getFullYear()} Cireng Emoy. All rights reserved.
        </div>
      </footer>
    `;

    // Pastikan ikon Feather muncul
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}

customElements.define('custom-footer', CustomFooter);

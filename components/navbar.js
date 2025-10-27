class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-icon {
          color: #fef3c7;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }
        a:hover {
          background-color: rgba(255,255,255,0.2);
        }
        .cta {
          background-color: white;
          color: #ef4444;
          border-radius: 2rem;
          font-weight: bold;
        }
        .cta:hover {
          background-color: #fef3c7;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 1rem;
          }
          ul {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="coffee" class="logo-icon"></i>
          Cireng Craze
        </a>
        <ul>
          <li><a href="#products">Produk</a></li>
          <li><a href="#testimonials">Testimoni</a></li>
          <li><a href="about.html">Tentang Kami</a></li>
          <li><a href="contact.html">Kontak</a></li>
          <li><a href="#order" class="cta">Pesan Sekarang</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);

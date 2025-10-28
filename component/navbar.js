class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .logo {
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(to right, #f97316, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        a:hover {
          color: #f97316;
        }
        a:hover::after {
          width: 100%;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #f97316, #f59e0b);
          transition: width 0.3s;
        }
        .whatsapp-btn {
          background: #25D366;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          transition: background 0.3s;
        }
        .whatsapp-btn:hover {
          background: #128C7E;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #4b5563;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
          }
          ul.active {
            display: flex;
          }
          .menu-toggle {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">Cireng Emoy</a>
        <button class="menu-toggle">
          <i data-feather="menu"></i>
        </button>
        <ul id="menu">
          <li><a href="#products">Menu</a></li>
          <li><a href="#testimonials">Testimoni</a></li>
          <li><a href="#about">Tentang Kami</a></li>
          <li>
            <a href="https://wa.me/6281234567890?text=Halo%20Cireng%20Emoy,%20saya%20mau%20pesan" class="whatsapp-btn">
              <i data-feather="message-circle"></i>
              <span>Pesan Sekarang</span>
            </a>
          </li>
        </ul>
      </nav>
    `;
    
    // Add mobile menu toggle functionality
    const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
    const menu = this.shadowRoot.querySelector('#menu');
    
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const links = this.shadowRoot.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #4ade80 0%, #86efac 100%);
          /* hijau muda ke hijau pastel */
          padding: 0.6rem 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .logo {
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
        }
        .logo span {
          margin-left: 0.4rem;
        }
        ul {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.3rem 0.7rem;
          border-radius: 0.4rem;
          transition: all 0.3s ease;
        }
        a:hover {
          background-color: rgba(255,255,255,0.25);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.3rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            position: fixed;
            top: 3.5rem;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #4ade80 0%, #86efac 100%);
            flex-direction: column;
            padding: 0.8rem;
            gap: 0.8rem;
            transform: translateY(-150%);
            transition: transform 0.3s ease;
          }
          ul.active {
            transform: translateY(0);
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>

      <nav>
        <div class="logo">
          <i data-feather="coffee"></i>
          <span>Cireng Emoy Cikampek</span>
        </div>
        <button class="mobile-menu-btn" id="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul id="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Menu</a></li>
          <li><a href="#testimonials">Testimoni</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>
    `;

    const mobileMenuBtn = this.shadowRoot.getElementById('mobile-menu-btn');
    const navMenu = this.shadowRoot.getElementById('nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      feather.replace();
    });

    const navLinks = this.shadowRoot.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);

class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo span {
          margin-left: 0.5rem;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        a:hover {
          background-color: rgba(255,255,255,0.2);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            position: fixed;
            top: 4rem;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
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

    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.getElementById('mobile-menu-btn');
    const navMenu = this.shadowRoot.getElementById('nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      feather.replace();
    });

    // Close menu when clicking a link
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

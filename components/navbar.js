class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .logo {
          color: #4f46e5;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
          color: #4f46e5;
        }
        ul {
          display: flex;
          gap: 2rem;
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
          color: #4f46e5;
        }
        a.active {
          color: #4f46e5;
        }
        a.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #4f46e5;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #4f46e5;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="coffee" class="logo-icon"></i>
          Gourmet Bites
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="/" class="active">Home</a></li>
          <li><a href="/menu.html">Menu</a></li>
          <li><a href="/testimonials.html">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
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
customElements.define('custom-navbar', CustomNavbar);

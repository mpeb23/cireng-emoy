class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: transparent;
                    backdrop-filter: blur(8px);
                    transition: all 0.4s ease;
                }

                :host(.scrolled) {
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
                }

                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: padding 0.3s ease;
                }

                :host(.scrolled) .navbar-container {
                    padding: 0.75rem 2rem;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: 800;
                    color: #065F46;
                    font-size: 1.6rem;
                    text-decoration: none;
                    letter-spacing: 0.5px;
                }

                .logo span {
                    color: #FBBF24;
                    margin-left: 3px;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }

                .nav-link {
                    color: #065F46;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .nav-link:hover,
                .nav-link.active {
                    color: #FBBF24;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -6px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #FBBF24;
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after,
                .nav-link.active::after {
                    width: 100%;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #065F46;
                    font-size: 1.8rem;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }

                .mobile-menu-btn:hover {
                    transform: scale(1.1);
                }

                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: white;
                        flex-direction: column;
                        text-align: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                        transform: translateY(-120%);
                        opacity: 0;
                        pointer-events: none;
                        transition: all 0.35s ease;
                    }

                    .nav-links.active {
                        transform: translateY(0);
                        opacity: 1;
                        pointer-events: auto;
                    }

                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>

            <div class="navbar-container">
                <a href="#home" class="logo">
                    Cireng<span>Emoy</span>
                </a>

                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>

                <div class="nav-links">
                    <a href="#" class="nav-link">Beranda</a>
                    <a href="#about" class="nav-link">Tentang Kami</a>
                    <a href="#menu" class="nav-link">Menu</a>
                    <a href="#contact" class="nav-link">Kontak</a>
                </div>
            </div>
        `;

        feather.replace();

        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        const links = this.shadowRoot.querySelectorAll('.nav-link');

        // Toggle menu untuk mobile
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-feather', navLinks.classList.contains('active') ? 'x' : 'menu');
            feather.replace();
        });

        // Efek scroll - ubah warna background
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.classList.add('scrolled');
            } else {
                this.classList.remove('scrolled');
            }
            updateActiveLink();
        });

        // Fungsi untuk highlight menu aktif
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const updateActiveLink = () => {
            let scrollPos = window.scrollY + 150;
            sections.forEach((section) => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                const id = section.getAttribute('id');
                const link = Array.from(links).find(a => a.getAttribute('href') === `#${id}`);
                if (scrollPos >= top && scrollPos < bottom) {
                    links.forEach(a => a.classList.remove('active'));
                    if (link) link.classList.add('active');
                }
            });
        };

        // Jalankan saat halaman dimuat
        updateActiveLink();
    }
}

customElements.define('custom-navbar', CustomNavbar);

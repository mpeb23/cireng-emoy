class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #065F46;
                    color: white;
                    padding: 3rem 0;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: #FBBF24;
                }
                
                .footer-about {
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    color: white;
                    transition: all 0.3s;
                }
                
                .social-link:hover {
                    background-color: #FBBF24;
                    transform: translateY(-3px);
                }
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #FBBF24;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                }
                
                .footer-link {
                    margin-bottom: 0.75rem;
                }
                
                .footer-link a {
                    color: white;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-link a:hover {
                    color: #FBBF24;
                }
                
                .footer-bottom {
                    text-align: center;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                        gap: 2rem 0;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-about-col">
                    <div class="footer-logo">CirengEmoy</div>
                    <p class="footer-about">Cireng premium dengan isian spesial dan bumbu rahasia. Gurihnya bikin emoy banget!</p>
                    <div class="social-links">
                        <a href="#" class="social-link"><i data-feather="instagram"></i></a>
                        <a href="#" class="social-link"><i data-feather="twitter"></i></a>
                        <a href="#" class="social-link"><i data-feather="facebook"></i></a>
                        <a href="#" class="social-link"><i data-feather="youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-links-col">
                    <h3 class="footer-heading">Tautan Cepat</h3>
                    <ul class="footer-links">
                        <li class="footer-link"><a href="https://mpeb23.github.io/cireng-emoy/">Beranda</a></li>
                        <li class="footer-link"><a href="#about">Tentang Kami</a></li>
                        <li class="footer-link"><a href="#menu">Menu</a></li>
                        <li class="footer-link"><a href="#contact">Kontak</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact-col">
                    <h3 class="footer-heading">Kontak Kami</h3>
                    <ul class="footer-links">
                        <li class="footer-link"><i data-feather="map-pin" class="mr-2"></i> Perumahan Sadjati Garden City 3 Blok A No 21 Pangulah Utara</li>
                        <li class="footer-link"><i data-feather="phone" class="mr-2"></i> +62 813-8063-7870</li>
                        <li class="footer-link"><i data-feather="mail" class="mr-2"></i> pebrianaherak23@gmail.com</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} CirengEmoy. All Rights Reserved.</p>
            </div>
        `;
        
        // Replace feather icons after rendering
        this.shadowRoot.querySelectorAll('[data-feather]').forEach(el => {
            feather.replace();
        });
    }
}

customElements.define('custom-footer', CustomFooter);
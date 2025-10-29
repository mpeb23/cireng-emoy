class MenuCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['title', 'price', 'description', 'image'];
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    
    render() {
        const title = this.getAttribute('title') || '';
        const price = this.getAttribute('price') || '';
        const description = this.getAttribute('description') || '';
        const image = this.getAttribute('image') || 'http://static.photos/food/640x360/20';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: white;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                .menu-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                
                .menu-content {
                    padding: 1.5rem;
                }
                
                .menu-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }
                
                .menu-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #065F46;
                    margin: 0;
                }
                
                .menu-price {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #F59E0B;
                    background-color: #FEF3C7;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                }
                
                .menu-description {
                    color: #6B7280;
                    line-height: 1.5;
                    font-size: 0.875rem;
                }
                .menu-button {
                    display: inline-block;
                    margin-top: 1rem;
                    background-color: #F59E0B;
                    color: white;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 0.25rem;
                    text-decoration: none;
                    transition: background-color 0.3s;
                }
                
                .menu-button:hover {
                    background-color: #D97706;
                }
            </style>
            
            <img src="${image}" alt="${title}" class="menu-image">
            <div class="menu-content">
                <div class="menu-header">
                    <h3 class="menu-title">${title}</h3>
                    <span class="menu-price">Rp ${price}</span>
                </div>
                <p class="menu-description">${description}</p>
                <a href="https://wa.me/6281234567890?text=Halo%20Cireng%20Emoy,%20saya%20ingin%20memesan%20${encodeURIComponent(title)}" class="menu-button" target="_blank">Pesan Sekarang</a>
</div>
        `;
    }
}

customElements.define('custom-menu-card', MenuCard);
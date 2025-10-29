class TestimonialCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['name', 'role', 'image', 'quote', 'rating'];
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    
    render() {
        const name = this.getAttribute('name') || '';
        const role = this.getAttribute('role') || '';
        const image = this.getAttribute('image') || 'http://static.photos/people/200x200/10';
        const quote = this.getAttribute('quote') || '';
        const rating = parseInt(this.getAttribute('rating') || '5');
        
        const stars = Array.from({ length: 5 }, (_, i) => 
            `<i data-feather="${i < rating ? 'star' : 'star'}" class="${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}"></i>`
        ).join('');
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 1.5rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                }
                
                .testimonial-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                
                .testimonial-image {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 1rem;
                }
                
                .testimonial-info {
                    flex: 1;
                }
                
                .testimonial-name {
                    font-weight: 600;
                    margin: 0;
                    color: #065F46;
                }
                
                .testimonial-role {
                    font-size: 0.875rem;
                    color: #6B7280;
                    margin: 0;
                }
                
                .testimonial-quote {
                    font-style: italic;
                    color: #4B5563;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }
                
                .testimonial-rating {
                    display: flex;
                    gap: 0.25rem;
                }
                
                .testimonial-rating i {
                    width: 1rem;
                    height: 1rem;
                }
            </style>
            
            <div class="testimonial">
                <div class="testimonial-header">
                    <img src="${image}" alt="${name}" class="testimonial-image">
                    <div class="testimonial-info">
                        <h4 class="testimonial-name">${name}</h4>
                        <p class="testimonial-role">${role}</p>
                    </div>
                </div>
                <p class="testimonial-quote">"${quote}"</p>
                <div class="testimonial-rating">
                    ${stars}
                </div>
            </div>
        `;
        
        feather.replace();
    }
}

customElements.define('custom-testimonial-card', TestimonialCard);
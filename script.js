// Testimonials data
const testimonials = [
    {
        name: "Budi Developer",
        message: "Cirengnya enak banget! Bikin coding jadi lebih semangat, bug langsung ketemu semua!"
    },
    {
        name: "Ani Programmer",
        message: "Pedasnya pas banget buat temenin ngerjain project tengah malam. Recomended!"
    },
    {
        name: "Joko Fullstack",
        message: "Harganya murah, rasanya premium. Kalo gak percaya, coba sendiri!"
    }
];

// Load testimonials
function loadTestimonials() {
    const container = document.getElementById('testimonial-container');
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl shadow-md testimonial-card';
        card.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="bg-amber-100 text-amber-600 rounded-full w-10 h-10 flex items-center justify-center">
                    ${testimonial.name.charAt(0)}
                </div>
                <h4 class="ml-3 font-semibold">${testimonial.name}</h4>
            </div>
            <p class="text-gray-600">"${testimonial.message}"</p>
            <div class="flex mt-4 text-amber-400">
                ${'<i data-feather="star" class="w-4 h-4 fill-current"></i>'.repeat(5)}
            </div>
        `;
        container.appendChild(card);
    });
    
    feather.replace();
}

// Handle testimonial form submission
document.getElementById('testimonial-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if (name && message) {
        const container = document.getElementById('testimonial-container');
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl shadow-md testimonial-card animate__animated animate__fadeIn';
        card.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="bg-amber-100 text-amber-600 rounded-full w-10 h-10 flex items-center justify-center">
                    ${name.charAt(0)}
                </div>
                <h4 class="ml-3 font-semibold">${name}</h4>
            </div>
            <p class="text-gray-600">"${message}"</p>
            <div class="flex mt-4 text-amber-400">
                ${'<i data-feather="star" class="w-4 h-4 fill-current"></i>'.repeat(5)}
            </div>
        `;
        
        container.prepend(card);
        feather.replace();
        
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
        
        // Show success message
        alert('Terima kasih atas testimoni Anda!');
    } else {
        alert('Mohon isi nama dan testimoni Anda!');
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadTestimonials();
    
    // Add animation to elements when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

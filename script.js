
document.addEventListener('DOMContentLoaded', function() {
    // Create additional bubbles dynamically
    const bubblesContainer = document.querySelector('.bubbles');
    if (bubblesContainer) {
        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random properties
            const size = Math.random() * 60 + 20;
            const left = Math.random() * 100;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.animationDuration = `${duration}s`;
            bubble.style.animationDelay = `${delay}s`;
            bubble.style.opacity = Math.random() * 0.5 + 0.1;
            
            bubblesContainer.appendChild(bubble);
        }
    }
// Form submission handling
    const orderForm = document.querySelector('form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const menu = document.getElementById('menu').value;
            const notes = document.getElementById('notes').value;
            
            if (!name || !phone || !menu) {
                alert('Harap isi semua bidang yang wajib diisi');
                return;
            }
            
            const menuItems = {
                'ayam_pedas': 'Cireng Ayam Pedas',
                'keju': 'Cireng Keju Mozarella',
                'sosis': 'Cireng Sosis BBQ',
                'original': 'Cireng Original',
                'bakso': 'Cireng Bakso Pedas',
                'komplit': 'Cireng Komplit'
            };
            
            const selectedMenu = menuItems[menu];
            const whatsappMessage = `Halo Cireng Emoy, saya ingin memesan:\n\nNama: ${name}\nMenu: ${selectedMenu}\nCatatan: ${notes || '-'}\n\nSilakan konfirmasi pesanan saya.`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
});
    }
    
    // Initialize animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-animate]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                const animationClass = element.getAttribute('data-animate');
                element.classList.add('animated', animationClass);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Efek muncul saat di-scroll (Intersection Observer)
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  // Observasi semua elemen menu-card
  document.querySelectorAll('.menu-card').forEach(card => {
    observer.observe(card);
  });
});
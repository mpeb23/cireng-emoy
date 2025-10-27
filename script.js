// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('#products > div > div');
    products.forEach((product, index) => {
        product.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        product.style.opacity = '0';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

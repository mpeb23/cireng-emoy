// WhatsApp order function
function orderWhatsApp(productName) {
    const phoneNumber = '6281234567890'; // Replace with your actual WhatsApp number
    const message = `Halo Cireng Emoy, saya ingin memesan ${productName}. Bisa info lebih lanjut?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // You can add any initialization code here
    console.log('Cireng Emoy loaded!');
});
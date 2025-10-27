// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any general functionality
});

// WhatsApp order function
function orderWhatsApp(itemName, price) {
    const phone = "1234567890"; // Replace with your actual WhatsApp number
    const message = `Hi! I'd like to order: ${itemName} ($${price}). My delivery address is: `;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

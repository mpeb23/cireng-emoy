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
// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("bg-transparent");
    navbar.querySelectorAll("a").forEach(link => link.classList.add("text-gray-800"));
  } else {
    navbar.classList.remove("bg-white", "shadow-md");
    navbar.classList.add("bg-transparent");
    navbar.querySelectorAll("a").forEach(link => link.classList.remove("text-gray-800"));
  }
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  const icon = menuBtn.querySelector("i");
  icon.dataset.feather = mobileMenu.classList.contains("hidden") ? "menu" : "x";
  feather.replace();
});
// Scroll Reveal Animation
window.addEventListener('scroll', revealElements);

function revealElements() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 120; // jarak sebelum animasi dimulai

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
// Scroll Reveal Animation (dengan efek stagger)
window.addEventListener('scroll', revealElements);

function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

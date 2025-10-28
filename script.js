feather.replace();

// Navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Efek muncul saat scroll
const fadeEls = document.querySelectorAll('.fade-in, .fade-left, .fade-right');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.2 });
fadeEls.forEach(el => observer.observe(el));

// Bubble effect
const bubbleContainer = document.getElementById('bubbles');
function createBubble() {
  const bubble = document.createElement('div');
  const size = Math.random() * 40 + 10;
  bubble.classList.add('bubble');
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${6 + Math.random() * 6}s`;
  bubbleContainer.appendChild(bubble);
  setTimeout(() => bubble.remove(), 12000);
}
setInterval(createBubble, 600);

// Efek mengetik otomatis
const textElement = document.getElementById('typing-text');
const text = "Cireng Home Made Gurih, Lembut, dan Bikin Nagih!";
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 80);
  }
}
window.addEventListener('load', typeText);
// LOADING SCREEN
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000); // loader tampil 1 detik, lalu hilang
});

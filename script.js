feather.replace();

// Navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
// ===== SCROLL ANIMATION =====
const fadeElements = document.querySelectorAll('.fade-in, .fade-left, .fade-right');

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
checkFadeIn(); // Jalankan saat halaman pertama kali dimuat

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

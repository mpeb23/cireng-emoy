// ========== FEATHER ICONS ==========
feather.replace();

// ========== TYPING TEXT DI HERO ==========
const typingText = document.getElementById("typing-text");
const words = ["Cireng Isi Home Made", "Kenyal, Gurih, dan Bikin Nagih!", "Dari Dapur ke Hatimu 💚"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  typingText.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 1200);
  }
}
typeEffect();

// ========== SCROLL REVEAL ANIMATION ==========
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in, .fade-left, .fade-right, .fade-up").forEach(el => observer.observe(el));

// ========== PRODUK SLIDER ==========
const scrollContainer = document.getElementById("productScroll");
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

if (scrollLeft && scrollRight && scrollContainer) {
  scrollLeft.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
  });

  scrollRight.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
  });
}

// ========== FORM TESTIMONI ==========
const form = document.getElementById("testimonialForm");
const list = document.getElementById("testimoniList");
const successMessage = document.getElementById("successMessage");

// Muat testimoni dari localStorage saat pertama kali
window.addEventListener("DOMContentLoaded", loadTestimonials);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const kota = document.getElementById("kota").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !kota || !pesan) {
    alert("Harap isi semua kolom!");
    return;
  }

  const testimonial = { nama, kota, pesan, date: new Date().toLocaleDateString("id-ID") };

  // Simpan ke localStorage
  const saved = JSON.parse(localStorage.getItem("testimoni")) || [];
  saved.push(testimonial);
  localStorage.setItem("testimoni", JSON.stringify(saved));

  // Tambahkan ke tampilan
  appendTestimonial(testimonial);

  // Reset form
  form.reset();

  // Tampilkan pesan sukses
  successMessage.classList.remove("hidden");
  setTimeout(() => successMessage.classList.add("hidden"), 3000);
});

// Fungsi menambah testimoni ke DOM
function appendTestimonial({ nama, kota, pesan, date }) {
  const card = document.createElement("div");
  card.className = "bg-green-50 p-6 rounded-xl shadow-md fade-up";
  card.innerHTML = `
    <p class="text-gray-700 mb-4 italic">"${pesan}"</p>
    <h4 class="text-green-600 font-bold">${nama}</h4>
    <p class="text-sm text-gray-500">${kota} • ${date}</p>
  `;
  list.prepend(card);
}

// Muat testimoni dari localStorage
function loadTestimonials() {
  const saved = JSON.parse(localStorage.getItem("testimoni")) || [];
  saved.forEach(t => appendTestimonial(t));
}

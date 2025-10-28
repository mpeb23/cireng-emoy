/* ====== SCRIPT.JS UNTUK CIRENG EMOY ====== */

// Jalankan Feather Icons
feather.replace();

/* ====== ANIMASI KETIK DI HERO ====== */
const typingText = document.getElementById("typing-text");
const textArray = [
  "Cireng Isi Home Made 💚",
  "Renyah di luar, lembut di dalam!",
  "Cemilan khas Bandung yang bikin nagih!",
];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

/* ====== ANIMASI SAAT SCROLL (FADE-IN EFFECT) ====== */
function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-in, .fade-left, .fade-right, .fade-up");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ====== NAVBAR SCROLL EFFECT ====== */
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ====== GELEMBUNG DI HERO ====== */
const bubblesContainer = document.getElementById("bubbles");
for (let i = 0; i < 20; i++) {
  const span = document.createElement("span");
  span.style.left = Math.random() * 100 + "%";
  span.style.width = span.style.height = Math.random() * 20 + 10 + "px";
  span.style.animationDelay = Math.random() * 10 + "s";
  bubblesContainer.appendChild(span);
}

/* ====== SLIDER PRODUK (SCROLL KE KIRI / KANAN) ====== */
const scrollContainer = document.getElementById("productScroll");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
  scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -320, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
  });
}

/* ====== FORM TESTIMONI ====== */
const form = document.getElementById("testimonialForm");
const testimoniList = document.getElementById("testimoniList");
const successMessage = document.getElementById("successMessage");

// Data testimoni awal (dummy)
let testimonies = [
  { nama: "Dewi", kota: "Karawang", pesan: "Cirengnya enak banget, gurih dan isiannya banyak!" },
  { nama: "Rizky", kota: "Bekasi", pesan: "Cireng isi ayam pedasnya juara! Cocok buat ngemil sore." },
  { nama: "Sinta", kota: "Bandung", pesan: "Beneran home made taste-nya kerasa banget. Mantap!" },
];

// Fungsi render testimoni
function renderTestimonials() {
  testimoniList.innerHTML = "";
  testimonies.forEach(t => {
    const div = document.createElement("div");
    div.className =
      "bg-green-50 p-6 rounded-xl shadow-md fade-up border border-green-100 text-left";
    div.innerHTML = `
      <p class="text-gray-700 italic mb-4">"${t.pesan}"</p>
      <h4 class="font-bold text-green-700">${t.nama}</h4>
      <span class="text-sm text-gray-500">${t.kota}</span>
    `;
    testimoniList.appendChild(div);
  });
  revealOnScroll();
}

renderTestimonials();

// Event submit testimoni baru
form.addEventListener("submit", e => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const kota = document.getElementById("kota").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama && kota && pesan) {
    testimonies.unshift({ nama, kota, pesan }); // masukkan testimoni baru di depan
    renderTestimonials();

    form.reset();
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 2500);
  } else {
    alert("Harap isi semua kolom testimoni!");
  }
});

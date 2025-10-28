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
// Tombol panah untuk scroll produk
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("productScroll");
  const leftBtn = document.getElementById("scrollLeft");
  const rightBtn = document.getElementById("scrollRight");

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
  });
});

// Form interaktif sederhana
document.getElementById("testimonialForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const kota = document.getElementById("kota").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const success = document.getElementById("successMessage");

  if (!nama || !kota || !pesan) {
    alert("Harap isi semua kolom sebelum mengirim testimoni.");
    return;
  }

  success.classList.remove("hidden");

  // Reset form
  this.reset();

  // Sembunyikan pesan sukses setelah 5 detik
  setTimeout(() => success.classList.add("hidden"), 5000);
});
document.getElementById("testimonialForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const kota = document.getElementById("kota").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const success = document.getElementById("successMessage");
  const testimoniList = document.getElementById("testimoniList");

  if (!nama || !kota || !pesan) {
    alert("Harap isi semua kolom sebelum mengirim testimoni.");
    return;
  }

  // Random avatar
  const avatarNum = Math.floor(Math.random() * 70) + 1;
  const avatarUrl = `https://i.pravatar.cc/100?img=${avatarNum}`;

  // Buat elemen testimoni baru
  const newCard = document.createElement("div");
  newCard.className =
    "testi-card new bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300";

  newCard.innerHTML = `
    <div class="flex justify-center mb-4">
      <img src="${avatarUrl}" alt="${nama}" class="w-20 h-20 rounded-full object-cover border-4 border-green-400">
    </div>
    <p class="text-gray-700 italic mb-4">“${pesan}”</p>
    <h4 class="font-semibold text-green-600">— ${nama}, ${kota}</h4>
  `;

  const testimoniList = document.getElementById("testimoniList");
const form = document.getElementById("testimonialForm");
const success = document.getElementById("successMessage");

// Ambil testimoni dari localStorage
let testimoniData = JSON.parse(localStorage.getItem("testimoniData")) || [];

// Render testimoni di halaman
function renderTestimoni() {
  testimoniList.innerHTML = "";

  if (testimoniData.length === 0) {
    testimoniList.innerHTML = `
      <p class="text-gray-500 text-lg italic">Belum ada testimoni. Jadilah yang pertama! 💚</p>
    `;
    return;
  }

  testimoniData.slice().reverse().forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "testi-card bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300";

    card.innerHTML = `
      <div class="flex justify-center mb-4">
        <img src="${item.avatar}" alt="${item.nama}" class="w-20 h-20 rounded-full object-cover border-4 border-green-400">
      </div>
      <p class="text-gray-700 italic mb-4">“${item.pesan}”</p>
      <h4 class="font-semibold text-green-600">— ${item.nama}, ${item.kota}</h4>
    `;
    testimoniList.appendChild(card);
  });
}

// Simpan testimoni baru
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const kota = document.getElementById("kota").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !kota || !pesan) {
    alert("Harap isi semua kolom sebelum mengirim testimoni.");
    return;
  }

  const avatarNum = Math.floor(Math.random() * 70) + 1;
  const avatarUrl = `https://i.pravatar.cc/100?img=${avatarNum}`;

  const newData = { nama, kota, pesan, avatar: avatarUrl };

  testimoniData.push(newData);

  // Simpan ke localStorage
  localStorage.setItem("testimoniData", JSON.stringify(testimoniData));

  // Render ulang daftar testimoni
  renderTestimoni();

  // Animasi sukses
  success.classList.remove("hidden");
  form.reset();
  setTimeout(() => success.classList.add("hidden"), 4000);
});

// Render testimoni saat halaman pertama kali dibuka
renderTestimoni();

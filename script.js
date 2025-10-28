// ================= ICON =================
feather.replace();

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ================= SCROLL ANIMATION =================
const fadeElements = document.querySelectorAll('.fade-in, .fade-left, .fade-right');
function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add('show');
    else el.classList.remove('show');
  });
}
window.addEventListener('scroll', checkFadeIn);
checkFadeIn();

// Intersection Observer untuk animasi halus
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.2 });
fadeElements.forEach(el => observer.observe(el));

// ================= BUBBLE EFFECT =================
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

// ================= EFEK KETIK OTOMATIS =================
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

// ================= PRODUK SLIDER =================
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("productScroll");
  const leftBtn = document.getElementById("scrollLeft");
  const rightBtn = document.getElementById("scrollRight");

  leftBtn?.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
  });
  rightBtn?.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
  });
});

// ================= TESTIMONI (DENGAN LOCALSTORAGE) =================
const listContainer = document.getElementById("testimoniList");
const form = document.getElementById("testimonialForm");
const successMessage = document.getElementById("successMessage");

// Testimoni default
const defaultTestimonials = [
  {
    nama: "Rina",
    kota: "Karawang",
    pesan: "Cirengnya enak banget! Gurih, lembut, dan isi ayamnya banyak. Anak-anak juga suka banget.",
    img: "https://i.pravatar.cc/100?img=12"
  },
  {
    nama: "Andi",
    kota: "Cikampek",
    pesan: "Rasa pedasnya pas banget, bikin nagih! Pokoknya wajib stok di rumah buat camilan sore.",
    img: "https://i.pravatar.cc/100?img=32"
  },
  {
    nama: "Sinta",
    kota: "Purwasari",
    pesan: "Cireng keju lumer-nya favoritku! Meleleh banget pas digigit. Harga juga terjangkau.",
    img: "https://i.pravatar.cc/100?img=5"
  }
];

// Ambil data dari localStorage (jika ada)
let testimonials = JSON.parse(localStorage.getItem("testimoniData")) || [];

// Fungsi tampilkan semua testimoni
function tampilkanTestimoni() {
  listContainer.innerHTML = "";

  const semuaData = [...defaultTestimonials, ...testimonials];

  if (semuaData.length === 0) {
    listContainer.innerHTML = `<p class="text-gray-500 text-lg italic">Belum ada testimoni. Jadilah yang pertama! 💚</p>`;
    return;
  }

  semuaData.forEach((t) => {
    const card = document.createElement("div");
    card.className = "testi-card bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 fade-in";
    card.innerHTML = `
      <div class="flex justify-center mb-4">
        <img src="${t.img || "https://i.pravatar.cc/100?u=" + t.nama}" alt="Foto ${t.nama}" class="w-20 h-20 rounded-full object-cover border-4 border-green-400">
      </div>
      <p class="text-gray-700 italic mb-4">“${t.pesan}”</p>
      <h4 class="font-semibold text-green-600">— ${t.nama}, ${t.kota}</h4>
    `;
    listContainer.appendChild(card);
  });
}

// Jalankan pertama kali
tampilkanTestimoni();

// Form kirim testimoni baru
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const kota = document.getElementById("kota").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !kota || !pesan) {
    alert("Harap isi semua kolom testimoni!");
    return;
  }

  // Buat avatar acak
  const randomImg = `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70) + 1}`;

  // Simpan data baru
  const dataBaru = { nama, kota, pesan, img: randomImg };
  testimonials.push(dataBaru);
  localStorage.setItem("testimoniData", JSON.stringify(testimonials));

  // Perbarui tampilan
  tampilkanTestimoni();
  form.reset();

  // Tampilkan pesan sukses
  successMessage.classList.remove("hidden");
  setTimeout(() => successMessage.classList.add("hidden"), 3000);
});

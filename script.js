// Data Produk (Tambahkan produk cireng Anda di sini) - Ganti gambar dengan yang asli jika perlu
const products = [
    { id: 1, name: 'Cireng Original', price: 15000, image: 'cirenbg.png', description: 'Cireng klasik dengan rasa gurih.' }, // Placeholder gambar
    { id: 2, name: 'Cireng Pedas', price: 18000, image: 'cirenbg.png', description: 'Cireng dengan level pedas tinggi.' },
    { id: 3, name: 'Cireng Isi Ayam', price: 20000, image: 'cirenbg.png', description: 'Cireng isi ayam suwir.' },
];

let cart = [];

// Render Produk (Update: Gambar saja, overlay saat hover/klik)
function renderProducts() {
    console.log('Render produk dipanggil'); // Debug: Cek di konsol browser
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error('Element #product-list tidak ditemukan!'); // Debug
        return;
    }
    productList.innerHTML = '';
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-sm-6 mb-4'; // Responsif: 4 kolom di lg, 2 di md/sm, stack di xs
        col.innerHTML = `
            <div class="card product-card h-100" onclick="toggleOverlay(this)"> <!-- Klik untuk mobile -->
                <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x250?text=Error+Gambar'"> <!-- Fallback jika gambar gagal -->
                <div class="product-overlay">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Rp ${product.price.toLocaleString()}</p>
                    <button class="btn btn-primary me-2" onclick="event.stopPropagation(); addToCart(${product.id})">Tambah ke Keranjang</button>
                    <button class="btn btn-outline-light" onclick="event.stopPropagation(); viewDetails(${product.id})">Detail</button>
                </div>
            </div>
        `;
        productList.appendChild(col);
    });
    console.log('Produk berhasil dirender'); // Debug
}

// Fungsi Toggle Overlay untuk Mobile (karena hover tidak ada)
function toggleOverlay(card) {
    if (window.innerWidth <= 768) { // Hanya di mobile
        card.classList.toggle('active');
    }
}

// Tambah ke Keranjang
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
    alert(`${product.name} ditambahkan ke keranjang!`);
}

// Update Jumlah Keranjang
function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Tampilkan Keranjang
function showCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Keranjang kosong.</p>';
    } else {
        cart.forEach(item => {
            cartItems.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap"> <!-- flex-wrap untuk mobile -->
                    <span>${item.name} (x${item.quantity}) - Rp ${(item.price * item.quantity).toLocaleString()}</span>
                    <button class="btn btn-sm btn-danger mt-1" onclick="removeFromCart(${item.id})">Hapus</button>
                </div>
            `;
        });
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartItems.innerHTML += `<hr><strong>Total: Rp ${total.toLocaleString()}</strong>`;
    }
    new bootstrap.Modal(document.getElementById('cartModal')).show();
}

// Hapus dari Keranjang
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    showCart();
}

// Checkout
function checkout() {
    bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
    const summary = document.getElementById('checkout-summary');
    if (!summary) return;
    summary.innerHTML = '<h6>Ringkasan Pesanan:</h6>';
    cart.forEach(item => {
        summary.innerHTML += `<p>${item.name} x${item.quantity} - Rp ${(item.price * item.quantity).toLocaleString()}</p>`;
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    summary.innerHTML += `<strong>Total: Rp ${total.toLocaleString()}</strong>`;
    new bootstrap.Modal(document.getElementById('checkoutModal')).show();
}

// Kirim ke WhatsApp (Checkout)
function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    if (!name || !address || !phone) {
        alert('Harap isi semua data!');
        return;
    }
    const orderDetails = cart.map(item => `${item.name} x${item.quantity}`).join(', ');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const message = `Halo, saya ${name} ingin memesan: ${orderDetails}. Total: Rp ${total.toLocaleString()}. Alamat: ${address}. HP: ${phone}.`;
    const whatsappUrl = `https://wa.me/628123456789?text=${encodeURIComponent(message)}`; // Ganti 628123456789 dengan nomor WhatsApp Anda
    window.open(whatsappUrl, '_blank');
    cart = []; // Kosongkan keranjang setelah pesan
    updateCartCount();
    bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
}

// Kirim Kontak ke WhatsApp
function sendContactToWhatsApp() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    if (!name || !email || !message) {
        alert('Harap isi semua data!');
        return;
    }
    const fullMessage = `Halo, saya ${name} (${email}) ingin bertanya: ${message}`;
    const whatsappUrl = `https://wa.me/628123456789?text=${encodeURIComponent(fullMessage)}`; // Ganti nomor WhatsApp
    window.open(whatsappUrl, '_blank');
    document.getElementById('contact-form').reset(); // Reset form
}

// Lihat Detail Produk
function viewDetails(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        alert(`Detail: ${product.description}\nHarga: Rp ${product.price.toLocaleString()}`);
    }
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(); // Pastikan dipanggil
});



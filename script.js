// Data Produk (Tambahkan produk cireng Anda di sini)
const products = [
    { id: 1, name: 'Cireng Original', price: 15000, image: 'https://source.unsplash.com/featured/?cireng,food', description: 'Cireng klasik dengan rasa gurih.' },
    { id: 2, name: 'Cireng Pedas', price: 18000, image: 'https://source.unsplash.com/featured/?spicy,food', description: 'Cireng dengan level pedas tinggi.' },
    { id: 3, name: 'Cireng Isi Ayam', price: 20000, image: 'https://source.unsplash.com/featured/?chicken,food', description: 'Cireng isi ayam suwir.' },
];

let cart = [];

// Render Produk (Update: Gambar saja, overlay saat hover/klik)
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-sm-6 mb-4'; // Responsif: 4 kolom di lg, 2 di md/sm, stack di xs
        col.innerHTML = `
            <div class="card product-card h-100" onclick="toggleOverlay(this)"> <!-- Klik untuk mobile -->
                <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
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
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Tampilkan Keranjang
function showCart() {
    const cartItems = document.getElementById('cart-items');
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
    summary.innerHTML = '<h6>Ringkasan Pesanan:</h6>';
    cart.forEach(item => {
        summary.innerHTML += `<p>${item.name} x${item.quantity} - Rp ${(item.price * item.quantity).to
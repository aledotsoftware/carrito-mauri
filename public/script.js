let cart = [];
const cartDrawer = document.getElementById('cartDrawer');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

function toggleCart() {
    cartDrawer.classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    
    // Quick visual feedback
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = '¡Añadido!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = '';
    }, 1000);
}

function updateCart() {
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="color: #555; text-align: center; margin-top: 2rem;">Tu carrito está vacío</p>';
        totalPrice.innerText = '$0';
        return;
    }
    
    let html = '';
    let total = 0;
    cart.forEach((item, index) => {
        html += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span style="color: #fbbf24; font-weight: bold;">$${item.price.toFixed(2)}</span>
            </div>
        `;
        total += item.price;
    });
    
    cartItems.innerHTML = html;
    totalPrice.innerText = `$${total.toFixed(2)}`;
}

// Close drawer on clicking outside
document.addEventListener('mousedown', (e) => {
    if (cartDrawer.classList.contains('active') && !cartDrawer.contains(e.target) && !e.target.closest('.cart-icon')) {
        toggleCart();
    }
});

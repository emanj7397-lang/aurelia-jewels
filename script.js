let cartCount = 0;

function addToCart() {
    cartCount++;
    const badge = document.getElementById('cart-count');
    if(badge) {
        badge.textContent = cartCount;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.buy-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            addToCart();
        });
    });
});

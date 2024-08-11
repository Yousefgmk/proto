// Load cart from localStorage when cart page loads
window.onload = function() {
    const cart = document.getElementById('cart');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)} (from ${item.store})`;
        cart.appendChild(listItem);
    });
};

function addToCart(name, price, store) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ name, price, store });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${name} from ${store} added to the cart!`);
}

function clearCart() {
    localStorage.removeItem('cart');
    document.getElementById('cart').innerHTML = ''; // Clear the displayed items
    alert('Cart has been cleared!');
}

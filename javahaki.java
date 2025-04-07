// JavaScript for handling cart functionality

let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const cartItems = document.getElementById('cart-items');

// Function to update the cart display
function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
}

// Function to open the cart modal
cartIcon.addEventListener('click', function() {
  cartModal.style.display = 'flex';
});

// Close the cart modal
closeCartBtn.addEventListener('click', function() {
  cartModal.style.display = 'none';
});

// Add product to cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.parentElement.querySelector('h3').textContent;
    const productPrice = parseFloat(this.parentElement.querySelector('p').textContent.replace('$', ''));

    cart.push({ name: productName, price: productPrice });
    updateCart();
    alert(`${productName} has been added to your cart.`);
  });
});

// Proceed to checkout (you can add your checkout functionality here)
checkoutBtn.addEventListener('click', function() {
  alert('Proceeding to checkout...');
  // You can redirect to a checkout page or integrate payment here
});

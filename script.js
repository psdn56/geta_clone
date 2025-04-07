// === Platform Detection ===
window.addEventListener('DOMContentLoaded', () => {
  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();
  let message = "You're viewing this on an unknown platform.";

  if (/android/.test(userAgent)) {
    message = "You're viewing this on an Android device.";
  } else if (/iphone|ipad|ipod/.test(userAgent)) {
    message = "You're on an iOS device.";
  } else if (/mac/.test(platform)) {
    message = "You're browsing from a macOS device.";
  } else if (/win/.test(platform)) {
    message = "You're using a Windows device.";
  } else if (/linux/.test(platform)) {
    message = "You're on a Linux system.";
  }

  const platformMsg = document.getElementById('platformMessage');
  if (platformMsg) {
    platformMsg.innerText = message;
  }
});

// === Shopping Cart Functionality ===

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
if (cartIcon && cartModal) {
  cartIcon.addEventListener('click', function() {
    cartModal.style.display = 'flex';
  });
}

// Close the cart modal
if (closeCartBtn) {
  closeCartBtn.addEventListener('click', function() {
    cartModal.style.display = 'none';
  });
}

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

// Proceed to checkout
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', function() {
    alert('Proceeding to checkout...');
    // Integrate payment/redirect here
  });
                         }

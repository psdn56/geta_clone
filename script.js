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
const firebaseConfig = {
  apiKey: "AIzaSyB3QlxpKCed-3qhHOUwrCtf7ae8sfKI6Fs",
  authDomain: "psdn56-493d0.firebaseapp.com",
  projectId: "psdn56-493d0",
  storageBucket: "psdn56-493d0.firebasestorage.app",
  messagingSenderId: "270176732328",
  appId: "1:270176732328:web:cd4cb4be6b27a1df14ae9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
  function generateOrderID(userMobile) {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  const last4Digits = userMobile.slice(-4);

  return `OID${yy}${mm}${dd}${last4Digits}${hh}${min}${ss}`;
  }
  // script.js

const slider = document.getElementById("heroSlider");
let index = 0;
const totalSlides = 3;
const bubbles = document.querySelectorAll(".absolute .w-3");

// Function to update the active slide and bubble
function changeSlide(slideIndex) {
  index = slideIndex;
  slider.style.transform = `translateX(-${index * 100}%)`;

  // Update active bubble
  bubbles.forEach((bubble, i) => {
    if (i === index) {
      bubble.classList.add("bg-red-600"); // Active bubble
      bubble.classList.remove("bg-white"); // Inactive bubbles
    } else {
      bubble.classList.add("bg-white");
      bubble.classList.remove("bg-red-600");
    }
  });
}

// Automatically change slides every 4 seconds
setInterval(() => {
  index = (index + 1) % totalSlides;
  changeSlide(index);
}, 4000);

// Initialize the first bubble as active
changeSlide(0);

                         }
fetch("https://script.google.com/macros/s/AKfy.../exec")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${item.Name}</h3>
        <p>${item.Description}</p>
        <img src="${item['Image URL']}" width="200"/>
      `;
      document.body.appendChild(div);
    });
  });


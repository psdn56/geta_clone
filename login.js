document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.querySelector(".login");
    const logoutLink = document.querySelector(".logout");

    // Example: If user is logged in, show logout, else show login
    const isLoggedIn = false; // Change this to check actual login state

    if (isLoggedIn) {
        loginLink.style.display = 'none';
    } else {
        logoutLink.style.display = 'none';
    }
});

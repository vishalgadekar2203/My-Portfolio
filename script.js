// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

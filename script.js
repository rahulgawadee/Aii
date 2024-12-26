const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle menu visibility
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !menuToggle.contains(e.target) && // Not the toggle button
    !navLinks.contains(e.target)     // Not the navigation menu
  ) {
    navLinks.classList.remove("active");
  }
});

// Close menu when clicking on a link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

const mobileNav = document.querySelector(".mobile-nav");
const hamburgerCloseButton = document.querySelector(".hamburger--close");
const navHeader = document.querySelector(".nav-header");
const modal = document.querySelector(".modal");
const toTopButton = document.querySelector(".to-top");

// Toggle Mobile Menu
function toggleMobileMenu() {
  mobileNav.classList.toggle("show");
}

// Scroll Event
document.addEventListener("scroll", () => {
  if (window.scrollY >= 40) {
    navHeader.classList.add("shadow");
    toTopButton.classList.add("show");
  } else {
    navHeader.classList.remove("shadow");
    toTopButton.classList.remove("show");
  }
});

// Toogle Application Modal
function toggleModal() {
  console.log("Hello");
  modal.classList.toggle("show");
}

function toggleMenu() {
  let navMenu = document.querySelector(".nav-menu");
  let menuBtn = document.querySelector(".menu-btn");
  let menuCloseBtn = document.querySelector(".menu-close-btn");

  navMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  menuCloseBtn.classList.toggle("active");
}
function closeMenu() {
  let navMenu = document.querySelector(".nav-menu");
  let menuBtn = document.querySelector(".menu-btn");
  let menuCloseBtn = document.querySelector(".menu-close-btn");

  navMenu.classList.toggle("active");
  menuCloseBtn.classList.toggle("active");
  menuBtn.classList.toggle("active");
}

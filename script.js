/* function for opening hamburger menu */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Dark Mode */
const darkTheme = document.querySelector(".fa-moon");
const darkThemeNav = document.getElementById("nav-fa-moon");

darkTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  darkTheme.classList.toggle("fa-moon");
  darkTheme.classList.toggle("fa-sun");
});

/* For Mobile */
darkThemeNav.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  darkTheme.classList.toggle("fa-moon");
  darkTheme.classList.toggle("fa-sun");
});

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

function DarkTheme(element, bodyClass, moonClass, sunClass) {
  element.addEventListener("click", function () {
    document.body.classList.toggle(bodyClass);
    element.classList.toggle(moonClass);
    element.classList.toggle(sunClass);
  });
}

// For Desktop
DarkTheme(darkTheme, "dark-theme", "fa-moon", "fa-sun");

// For Mobile
DarkTheme(darkThemeNav, "nav-dark-theme", "fa-moon", "fa-sun");

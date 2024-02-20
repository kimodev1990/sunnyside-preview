const menuHamburgerMobile = document.getElementById("menu-hamburger-mobile");
const menuContentMobile = document.getElementById("menu-content-mobile");
const menuContentDesktop = document.getElementById("menu-content-desktop");

menuHamburgerMobile.addEventListener("click", () => {
  menuHamburgerMobile.classList.toggle("open");
  menuContentMobile.classList.toggle("hidden");
});

function myFunction(x) {
  if (x.matches) {
    menuContentDesktop.classList.remove("hidden");
  } else {
    menuContentDesktop.classList.add("hidden");
  }
}

var x = window.matchMedia("(min-width: 768px)");

myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});

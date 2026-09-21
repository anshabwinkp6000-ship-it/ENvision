/* Bramayugam (2024) — fan tribute website
   script.js — navbar glass effect + mobile menu behaviour */

// 1. Frosted-glass navbar after scrolling past the hero's top
window.addEventListener("scroll", function () {
  var nav = document.querySelector(".brm-nav");
  if (nav) nav.classList.toggle("glass", window.scrollY > 60);
});

// 2. Close the mobile menu after a nav link is clicked
document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    var menu = document.getElementById("brmNav");
    if (menu && menu.classList.contains("show")) {
      // Uses Bootstrap's Collapse API (bundle is loaded before this script)
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

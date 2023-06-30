// baby beta toggler js
var themeToggle = document.getElementById("themeToggleTestBtn");
const body = document.body;

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
});

body.classList.remove("dark-theme");

var userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userPrefersDark) {
  body.classList.add("dark-theme");
}

// theme toggler button
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

// from "main" page, navigates to "blogwrite" page
// (might end up getting moved to a different file)

const blogWriteBtn = document.getElementById("blogWriteBtn");
blogWriteBtn.addEventListener("click", () => {
  window.location.href = "/blogwrite";
});

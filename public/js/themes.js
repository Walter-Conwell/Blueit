// theme toggle functionality
var body = document.body;
var themeToggleBtn = document.getElementById("themeToggleTestBtn");
var darkThemeBtn = document.getElementById("darkThemeBtn");
var madelinesThemeBtn = document.getElementById("madelinesThemeBtn");
var willsThemeBtn = document.getElementById("willsThemeBtn");
var waltersThemeBtn = document.getElementById("waltersThemeBtn");
var kylesThemeBtn = document.getElementById("kylesThemeBtn");

var classes = [
  "default-theme",
  "dark-theme",
  "madelines-theme",
  "wills-theme",
  "walters-theme",
];
var currentClassIndex = 0;

themeToggleBtn.addEventListener("click", toggleClass);
darkThemeBtn.addEventListener("click", loadDarkTheme);
madelinesThemeBtn.addEventListener("click", loadMadelinesTheme);
willsThemeBtn.addEventListener("click", loadWillsTheme);
waltersThemeBtn.addEventListener("click", loadWaltersTheme);
kylesThemeBtn.addEventListener("click", loadKylesTheme);

function toggleClass() {
  currentClassIndex = (currentClassIndex + 1) % classes.length;
  var currentClass = classes[currentClassIndex];
  body.className = currentClass;
}

function loadDarkTheme() {
  body.className = "dark-theme";
}

function loadMadelinesTheme() {
  body.className = "madelines-theme";
}

function loadWillsTheme() {
  body.className = "wills-theme";
}

function loadWaltersTheme() {
  body.className = "walters-theme";
}

function loadKylesTheme() {
  body.className = "kyles-theme";
}

// loads "blog write" page from landing page
const blogWriteBtn = document.getElementById("blogWriteBtn");
blogWriteBtn.addEventListener("click", navigateToBlogWrite);

function navigateToBlogWrite() {
  window.location.href = "/blogwrite";
}


//cat theme

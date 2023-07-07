// theme toggle functionality
var body = document.body;
var themeToggleBtn = document.getElementById("themeToggleTestBtn");
/*var darkThemeBtn = document.getElementById("darkThemeBtn");*/

var andricksThemeBtn = document.getElementById("andricksThemeBtn");
var willsThemeBtn = document.getElementById("willsThemeBtn");
var waltersThemeBtn = document.getElementById("waltersThemeBtn");
/*
var kylesThemeBtn = document.getElementById("kylesThemeBtn");
var madelinesThemeBtn = document.getElementById("madelinesThemeBtn");*/
var heroImage = document.querySelector(".hero-image");

var classes = [
  "default-theme",
  /*"dark-theme",
  "madelines-theme",
  "kyles-theme"*/
  "andricks-theme",
  "wills-theme",
  "walters-theme",
  ,
];
var currentClassIndex = 0;

themeToggleBtn && themeToggleBtn.addEventListener("click", toggleClass);
/*darkThemeBtn && darkThemeBtn.addEventListener("click", loadDarkTheme);*/
// madelinesThemeBtn &&
//   madelinesThemeBtn.addEventListener("click", loadMadelinesTheme);
// andricksThemeBtn &&
//   andricksThemeBtn.addEventListener("click", loadAndricksTheme);
// willsThemeBtn && willsThemeBtn.addEventListener("click", loadWillsTheme);
// waltersThemeBtn && waltersThemeBtn.addEventListener("click", loadWaltersTheme);
// kylesThemeBtn && kylesThemeBtn.addEventListener("click", loadKylesTheme);

function toggleClass() {
  currentClassIndex = (currentClassIndex + 1) % classes.length;
  var currentClass = classes[currentClassIndex];
  body.className = currentClass;
  updateHeroImageVisibility(currentClass);
}

/*function loadDarkTheme() {
  body.className = "dark-theme";
  updateHeroImageVisibility("dark-theme");
}

function loadMadelinesTheme() {
  body.className = "madelines-theme";
  updateHeroImageVisibility("madelines-theme");
}

function loadKylesTheme() {
  body.className = "kyles-theme";
  updateHeroImageVisibility("kyles-theme");
}
*/

function loadAndricksTheme() {
  body.className = "andricks-theme";
  updateHeroImageVisibility("andricks-theme");
}

function loadWillsTheme() {
  body.className = "wills-theme";
  updateHeroImageVisibility("wills-theme");
}

function loadWaltersTheme() {
  body.className = "walters-theme";
  updateHeroImageVisibility("walters-theme");
}

function updateHeroImageVisibility(theme) {
  if (theme === "dark-theme" || theme === "madelines-theme") {
    heroImage.style.display = "block";
  } else {
    heroImage.style.display = "none";
  }
}

// loads "blog write" page from landing page
const blogWriteBtn = document.getElementById("blogWriteBtn");
blogWriteBtn && blogWriteBtn.addEventListener("click", navigateToBlogWrite);

function navigateToBlogWrite() {
  window.location.href = "/blogwrite";
}

window.addEventListener("load", function () {
  if (this.location.pathname === "/andrick") {
    loadAndricksTheme();
  }
  if (this.location.pathname === "/madeline") {
    loadMadelinesTheme();
  }
  if (this.location.pathname === "/will") {
    loadWillsTheme();
  }
  if (this.location.pathname === "/walter") {
    loadWaltersTheme();
  }
  if (this.location.pathname === "/kyle") {
    loadKylesTheme();
  }
});

//cat theme

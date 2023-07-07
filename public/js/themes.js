// theme toggle functionality
var body = document.body;
var themeToggleBtn = document.getElementById("themeToggleTestBtn");
/*var darkThemeBtn = document.getElementById("darkThemeBtn");*/
var madelinesThemeBtn = document.getElementById("madelinesThemeBtn");
var andricksThemeBtn = document.getElementById("andricksThemeBtn");
var willsThemeBtn = document.getElementById("willsThemeBtn");
var waltersThemeBtn = document.getElementById("waltersThemeBtn");
var kylesThemeBtn = document.getElementById("kylesThemeBtn");
var heroImage = document.querySelector(".hero-image");

var classes = [
  "default-theme",
  /*"dark-theme",*/
  "madelines-theme",
  "andricks-theme",
  "wills-theme",
  "walters-theme",
  "kyles-theme",
];
var currentClassIndex = 0;

themeToggleBtn && themeToggleBtn.addEventListener("click", toggleClass);
/*darkThemeBtn && darkThemeBtn.addEventListener("click", loadDarkTheme);*/
madelinesThemeBtn &&
  madelinesThemeBtn.addEventListener("click", loadMadelinesTheme);
andricksThemeBtn &&
  andricksThemeBtn.addEventListener("click", loadAndricksTheme);
willsThemeBtn && willsThemeBtn.addEventListener("click", loadWillsTheme);
waltersThemeBtn && waltersThemeBtn.addEventListener("click", loadWaltersTheme);
kylesThemeBtn && kylesThemeBtn.addEventListener("click", loadKylesTheme);

function toggleClass() {
  currentClassIndex = (currentClassIndex + 1) % classes.length;
  var currentClass = classes[currentClassIndex];
  body.className = currentClass;
  updateHeroImageVisibility(currentClass);
}

/*function loadDarkTheme() {
  body.className = "dark-theme";
  updateHeroImageVisibility("dark-theme");
}*/

function loadMadelinesTheme() {
  body.className = "madelines-theme";
  updateHeroImageVisibility("madelines-theme");
}

function loadAndricksTheme() {
  body.className = "andricks-theme";
  updateHeroImageVisibility("andricks-theme");

  // location.replace("/andrick");
}

function loadWillsTheme() {
  body.className = "wills-theme";
  updateHeroImageVisibility("wills-theme");
}

function loadWaltersTheme() {
  body.className = "walters-theme";
  updateHeroImageVisibility("walters-theme");
}

function loadKylesTheme() {
  body.className = "kyles-theme";
  updateHeroImageVisibility("kyles-theme");
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

//cat theme

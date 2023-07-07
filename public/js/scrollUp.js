var scrollUp = document.getElementById("scrollUp");

window.addEventListener("scroll", function () {
  // Display or hide the scroll-to-top button based on the scroll position
  if (window.scrollY > 100) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});

scrollUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
//   sends viewport to the most top left position
  console.log("scroll up");
});

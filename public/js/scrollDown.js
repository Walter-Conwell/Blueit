var scrollDown = document.getElementById("scrollDown");

window.addEventListener("scroll", function () {
  // Display or hide the scroll-to-top button based on the scroll position
  if (window.scrollY < 100) {
    scrollDown.style.display = "block";
  } else {
    scrollDown.style.display = "none";
  }
});

scrollDown.addEventListener("click", function () {
  window.scrollTo(
    0,
    document.documentElement.scrollHeight - window.innerHeight
    // ignores footers and other elements and goes to absolute end of viewport.
  );
  console.log("scroll down");
});

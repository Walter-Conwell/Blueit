// from "main" page, navigates to "blogwrite" page

const blogWriteBtn = document.getElementById("blogWriteBtn");
blogWriteBtn.addEventListener("click", () => {
  window.location.href = "/blogwrite";
});

// from "blogwrite" page, navigates back to "main" page

const backToMainBtn = document.getElementById("backToMainBtn");
backToMainBtn.addEventListener("click", () => {
  window.location.href = "";
});

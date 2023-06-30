// sign up modal
var signUpModal = document.getElementById("signUpModal");
var signUpBtn = document.getElementById("signUpBtn");
var signUpClose = signUpModal.getElementsByClassName("close")[0];

signUpBtn.onclick = function () {
  signUpModal.style.display = "block";
};

signUpClose.onclick = function () {
  signUpModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
};

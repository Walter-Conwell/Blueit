var profileBtn = document.getElementById("profileBtn");
var profileModal = document.getElementById("profileModal");

// event listener
profileBtn.onclick = function () {
  console.log(profileModal);
  profileModal.style.display = "block";
  console.log("Profile");
};

window.onclick = function (event) {
  if (event.target == profileModal) {
    profileModal.style.display = "none";
  }
};

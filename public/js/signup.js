// sign up modal
var signUpModal = document.getElementById("signUpModal");
var signUpBtn = document.getElementById("signUpBtn");
var signUpClose = signUpModal.getElementsByClassName("close")[0];

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("button clicked");

  // Collect values from the login form
  console.log(document.querySelector("#defaultSignUpForm-username"));
  const username = document
    .querySelector("#defaultSignUpForm-username")
    .value.trim();
  const email = document.querySelector("#defaultSignUpForm-email").value.trim();
  const password = document
    .querySelector("#defaultSignUpForm-pass")
    .value.trim();

  if (username && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/credentials", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};

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

document
  .querySelector("#modalSignUpBtn")
  .addEventListener("click", signupFormHandler);

// sign up modal
var signUpModal = document.getElementById("signUpModal");
var signUpBtn = document.getElementById("signUpBtn");
var signUpClose = signUpModal.getElementsByClassName("close")[0];

const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#defaultForm-username").value.trim();
  const email = document.querySelector("#defaultForm-email").value.trim();
  const password = document.querySelector("#defaultForm-pass").value.trim();

  if (username && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user-credentials", {
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
  .querySelector("#modalSignupBtn")
  .addEventListener("submit", signupFormHandler);

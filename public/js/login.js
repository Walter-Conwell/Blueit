// login modal and fomrhandler
var loginModal = document.getElementById("loginModal");
var loginBtn = document.getElementById("loginBtn");
var loginClose = loginModal.getElementsByClassName("close")[0];

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#defaultLoginForm-email").value.trim();
  const password = document
    .querySelector("#defaultLoginForm-pass")
    .value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/credentials/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

loginBtn.onclick = function () {
  loginModal.style.display = "block";
};

loginClose.onclick = function () {
  loginModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
};

document
  .querySelector("#modalLoginBtn")
  .addEventListener("click", loginFormHandler);

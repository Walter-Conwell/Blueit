// logout handler
const logout = async () => {
  // Send a POST request to the API endpoint
  const response = await fetch("/api/user-credentials/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout").addEventListener("click", logout);

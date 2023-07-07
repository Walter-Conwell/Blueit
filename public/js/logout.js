// logout handler
const logout = async () => {
  // Send a POST request to the API endpoint
  const response = await fetch("/api/credentials/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    location.replace("/");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logOutBtn").addEventListener("click", logout);

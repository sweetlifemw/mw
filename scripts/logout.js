document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        const res = await fetch("https://sweetlife-1dpx.onrender.com/api/logout", {
          method: "POST",
          credentials: "include"
        });

        if (res.ok) {
          alert("Logged out successfully.");
          window.location.href = "../index.html"; // Redirect to login page
        } else {
          alert("Logout failed. Try again.");
        }
      } catch (err) {
        console.error("Logout error:", err);
        alert("Something went wrong during logout.");
      }
    });
  }
});

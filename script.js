// Toggle dark mode and save preference
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  }
  
  // Load dark mode on page load
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    }
  
    // Display healthy tips
    const tips = [
      "Drink 8 glasses of water a day.",
      "Exercise for at least 30 minutes.",
      "Get 7-9 hours of sleep every night."
    ];
    const tipsList = document.getElementById("tips-list");
    if (tipsList) {
      tips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
      });
    }
  
    // Handle form submission
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;
        document.getElementById("form-output").textContent =
          `Thank you, ${name}, for your message: "${message}"`;
      });
    }
  });
  
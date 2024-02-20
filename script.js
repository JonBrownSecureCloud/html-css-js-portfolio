function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Counter code
document.addEventListener("DOMContentLoaded", function() {
  const counter = document.querySelector(".counter-number");
  
  // Function to fetch counter value from the server
  async function updateCounter() {
      try {
          let response = await fetch("Your-LambdaFunction-URL");
          if (!response.ok) {
              throw new Error("Failed to fetch counter data");
          }
          let data = await response.json();
          counter.textContent = data.views;
      } catch (error) {
          console.error("Error fetching counter data:", error);
      }
  }
  
  // Initial call to update counter when the page loads
  updateCounter();

  // Optionally, you can update the counter at regular intervals
  // setInterval(updateCounter, 5000); // Update every 5 seconds, for example
});

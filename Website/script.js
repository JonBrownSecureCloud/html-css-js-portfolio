function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

// Counter code
document.addEventListener("DOMContentLoaded", function() {
  const counter = document.querySelector(".counter-number");
  async function updateCounter() {
      try {
          let response = await fetch("https://74exitkjjxmjwkrbbxkr4t77pu0uuvlq.lambda-url.us-east-1.on.aws/");
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

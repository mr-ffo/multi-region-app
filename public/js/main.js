// main.js
// Handles client-side interactions and fetches environment metadata.

const regionBadge = document.getElementById('region-badge');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile navigation menu.
navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('show');
});

// Close the mobile menu after clicking a link.
navLinks?.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show');
  }
});

// Fetch current AWS environment information from the backend.
async function loadEnvironment() {
  try {
    const response = await fetch('/api/env');
    const data = await response.json();
    regionBadge.textContent = data.environment;
  } catch (error) {
    regionBadge.textContent = 'Local Development Environment';
    console.error('Unable to load environment metadata:', error);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadEnvironment();
});

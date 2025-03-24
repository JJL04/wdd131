// Set the copyright year and last modified date dynamically
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu functionality
document.querySelector('.hamburger').addEventListener('click', function () {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('open');
});

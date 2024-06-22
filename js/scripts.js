document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Toggle menu when menuToggle is clicked
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickInsideToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickInsideToggle) {
            navLinks.classList.remove('show');
        }
    });
});
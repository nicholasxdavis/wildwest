// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const agePopup = document.getElementById('age-popup');
    const confirmAgeButton = document.getElementById('confirm-age');

    // Check if age verification has been confirmed
    if (!localStorage.getItem('ageConfirmed')) {
        agePopup.style.display = 'flex';
    }

    // Handle age confirmation
    confirmAgeButton.addEventListener('click', function() {
        localStorage.setItem('ageConfirmed', 'true');
        agePopup.style.display = 'none';
    });
});

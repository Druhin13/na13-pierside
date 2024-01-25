$(document).ready(function () {
    // Function to open the popup by triggering the animation
    function openPopup() {
        $('.popup-open-anim').click();
    }

    // Function to close the popup by triggering the animation
    function closePopup() {
        $('.popup-close-anim').click();
    }

    // Check if the #popup-switch div is present on the page
    const popupSwitchExists = $('#popup-switch').length > 0;

    // Open the popup after 10 seconds only if #popup-switch is present on the page
    if (popupSwitchExists) {
        setTimeout(openPopup, 10000); // 10 seconds delay
    }

    // Close the popup when the close button or close button in the popup is clicked
    $('#popup-close-button, #popup-close').on('click', function () {
        closePopup();
    });

    // Permanently close the popup when the "Don't show this again" link is clicked
    $('#popup-permanent-close').on('click', function () {
        closePopup();
        // Set a localStorage flag to remember the user's preference
        localStorage.setItem('popupClosed', 'true');
    });

    // Check if the user has already closed the popup permanently and prevent it from showing
    if (localStorage.getItem('popupClosed') === 'true') {
        closePopup();
    }
});
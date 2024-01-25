$(document).ready(function() {
    // Function to open the popup by triggering the animation
    function openPopup() {
      $('.popup-open-anim').click();
    }
  
    // Function to close the popup by triggering the animation
    function closePopup() {
      $('.popup-close-anim').click();
    }
  
    // Open the popup after 10 seconds on all pages except the contact page
    const currentPage = window.location.pathname;
    if (currentPage !== '/contact') {
      setTimeout(openPopup, 10000); // 10 seconds delay
    }
  
    // Close the popup when the close button or close button in the popup is clicked
    $('#popup-close-button, #popup-close').on('click', function() {
      closePopup();
    });
  
    // Permanently close the popup when the "Don't show this again" link is clicked
    $('#popup-permanent-close').on('click', function() {
      closePopup();
      // Set a localStorage flag to remember the user's preference
      localStorage.setItem('popupClosed', 'true');
    });
  
    // Check if the user has already closed the popup permanently and prevent it from showing
    if (localStorage.getItem('popupClosed') === 'true') {
      closePopup();
    }
  });
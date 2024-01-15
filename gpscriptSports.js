document.addEventListener('DOMContentLoaded', function () {

    // Function to display the current day and date in Gregorian calendar
    function displayCurrentDayAndDateGregorian() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const currentDateGregorian = new Date().toLocaleDateString('en-US', options);
  
        document.getElementById('current-date-gregorian').innerHTML = currentDateGregorian;
    }
  
    // Function to display the current day and date in Islamic calendar
    function displayCurrentDayAndDateIslamic() {
        const islamicOptions = { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' };
        const currentDateIslamic = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', islamicOptions).format(Date.now());
  
        document.getElementById('current-date-islamic').innerHTML = currentDateIslamic;
    }
  
    // Function to display both Gregorian and Islamic dates
    function displayCurrentDates() {
        displayCurrentDayAndDateGregorian();
        displayCurrentDayAndDateIslamic();
    }
  
    // Call the function to display both dates
    displayCurrentDates();

    // Event listener for scrolling
    window.addEventListener('scroll', function () {
        // Logo size responds to scrolling
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var logoElement = document.getElementById('falconLogo');

        var initialSize = 150;
        var maxSize = 500;
        var newSize = Math.min(maxSize, initialSize + scrollPosition);

        logoElement.style.width = newSize + 'px';
        logoElement.style.height = newSize + 'px';
    });
    var imageContainers = document.querySelectorAll('.image-container');

    // Attach event listeners to each container
    imageContainers.forEach(function (container) {
        container.addEventListener('mouseenter', function () {
            // On hover, scale the image and show the text
            container.querySelector('img').style.transform = 'scale(1.1)';
            container.querySelector('.image-text').style.opacity = 1;
        });

        container.addEventListener('mouseleave', function () {
            // On mouse leave, reset the styles
            container.querySelector('img').style.transform = 'scale(1)';
            container.querySelector('.image-text').style.opacity = 0;
        });
    });

    
});
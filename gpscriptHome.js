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
  });

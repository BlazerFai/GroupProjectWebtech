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


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




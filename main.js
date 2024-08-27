let slideIndex = 0;
let slideInterval;

// Function to start the automatic slide movement
function startSlide() {
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 2000); // 2000 milliseconds = 2 seconds
}

// Function to move the slide
function moveSlide(n) {
  clearInterval(slideInterval); // Clear interval to prevent conflicts
  showSlides(slideIndex += n);
  startSlide(); // Restart the interval after moving the slide
}

// Function to display slides
function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-item');
  if (n >= slides.length) {
      slideIndex = 0;
  } else if (n < 0) {
      slideIndex = slides.length - 1;
  }
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

// Call showSlides once on page load to display the first image
showSlides(slideIndex);

// Start the automatic slide movement
startSlide();
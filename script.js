const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideContainer = document.querySelector(".carousel-slide");

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100; // 100% for each slide
  slideContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  showSlide(currentIndex);
});

// Show the initial slide
showSlide(currentIndex);

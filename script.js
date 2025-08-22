let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let interval = setInterval(nextSlide, 7000); // auto every 5s

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
    resetTimer();
  });
});

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

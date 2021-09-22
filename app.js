function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide"); //через куэри получаем каждый из слайдов

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      //первый способ работы с массивом через for, второй через forEach
      slide.classList.remove("active");
    });
  }
}

slidesPlugin(2);

const slides = document.querySelectorAll(".slide"); //через куэри получаем каждый из слайдов

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

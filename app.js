let sliders = document.querySelectorAll(".slider");
let down = document.querySelector(".down");
let up = document.querySelector(".up");

let currentPosition = 0;

function activateSlider() {
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translateY(-${currentPosition}00%)`;
    console.log(index);
  }
  currentPosition++;

  if (currentPosition > sliders.length - 1) {
    currentPosition = 0;
  }
}

setInterval(() => {
  activateSlider();
}, 4000);

up.addEventListener("click", () => {
    currentPosition = currentPosition -1
    if (currentPosition < 1) {
        currentPosition = sliders.length
    }
    for (let index = 0; index < sliders.length; index++) {
      sliders[index].style.transform = `translateY(-${currentPosition -1}00%)`;
    }
})

down.addEventListener("click", () => {
    currentPosition = currentPosition +1
    if (currentPosition < 1) {
        currentPosition = sliders.length -1

        currentPosition = 0
    }
    for (let index = 0; index < sliders.length; index++) {
      sliders[index].style.transform = `translateY(-${currentPosition}00%)`;
    }
})
let curSlide = 0;
const next = document.querySelector(".slider-btn--right");
const last = document.querySelector(".slider-btn--left");
let curImg = document.querySelector(`.p${curSlide}`);
let dot = document.querySelector(`.d${curSlide}`);

next.addEventListener("click", function () {
  curImg.style.opacity = "0";
  dot.style.backgroundColor = "#000";

  curSlide < 4 ? curSlide++ : (curSlide = 0);
  curImg = document.querySelector(`.p${curSlide}`);
  dot = document.querySelector(`.d${curSlide}`);
  curImg.style.opacity = "1";
  dot.style.backgroundColor = "#72706d";
});

last.addEventListener("click", function () {
  curImg.style.opacity = "0";
  dot.style.backgroundColor = "#000";

  curSlide > 0 ? curSlide-- : (curSlide = 4);
  curImg = document.querySelector(`.p${curSlide}`);
  dot = document.querySelector(`.d${curSlide}`);
  curImg.style.opacity = "1";
  dot.style.backgroundColor = "#72706d";
});

const body = document.querySelector("body");

const IMAGE_MAX = 5;

function paintImage(imgNumber) {
  const img = document.createElement("img");
  img.src = `images/${imgNumber + 1}.jpg`;
  img.classList.add("bgImage");
  body.appendChild(img);
}

function getRandomNumber() {
  const number = Math.floor(Math.random() * IMAGE_MAX);
  return number;
}

function init() {
  const randomNubmer = getRandomNumber();
  paintImage(randomNubmer);
}

init();

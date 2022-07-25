const button = document.querySelector("button");
const div = document.querySelector(".color");

div.addEventListener("pointerover", changeBgColor);
div.addEventListener("pointerout", revertBgColor);
button.addEventListener("pointerout", revertBgColor);
button.addEventListener("click", changeBgColor);

function changeBgColor() {
  const randomRedValue = Math.floor(Math.random() * 255);
  const randomGreenValue = Math.floor(Math.random() * 255);
  const randomBlueValue = Math.floor(Math.random() * 255);

  div.style.transition = "background-color .5s";
  div.style.backgroundColor = `rgb(${randomRedValue}, ${randomGreenValue}, ${randomBlueValue})`;
}

function revertBgColor() {
  div.style.backgroundColor = "black";
}

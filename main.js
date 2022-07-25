const button = document.querySelector("button");
const div = document.querySelector(".color");
const colorDiv = document.querySelector(".color-display h5");

div.addEventListener("pointerover", changeBgColor);
div.addEventListener("pointerout", revertBgColor);
button.addEventListener("pointerout", revertBgColor);
button.addEventListener("click", changeBgColor);

function changeBgColor() {
  const randomRedValue = Math.floor(Math.random() * 255);
  const randomGreenValue = Math.floor(Math.random() * 255);
  const randomBlueValue = Math.floor(Math.random() * 255);
  const color = `rgb(${randomRedValue}, ${randomGreenValue}, ${randomBlueValue})`;

  div.style.transition = "background-color .5s";
  div.style.backgroundColor = color;
  colorDiv.innerText = color;
}

function revertBgColor() {
  div.style.backgroundColor = "black";
  colorDiv.innerText = "rgb(0, 0, 0)";
}

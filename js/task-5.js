const button = document.querySelector(".change-color");
const colorChange = document.querySelector(".color");
button.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  colorChange.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

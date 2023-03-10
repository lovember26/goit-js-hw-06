function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  const getRandomColor = getRandomHexColor();
  document.body.style.backgroundColor = getRandomColor;
  textColorEl.textContent = getRandomColor;
}

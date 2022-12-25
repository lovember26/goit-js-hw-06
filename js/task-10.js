function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createButtonEl = document.querySelector("button[data-create]");
const destroyButtonEl = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#boxes");

createButtonEl.addEventListener("click", createBoxes);
destroyButtonEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  const arrOfDivs = [];
  let divSize = 30;

  for (let i = 1; i <= amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    divSize += 10;
    arrOfDivs.push(newDiv);
  }
  divEl.append(...arrOfDivs);
}

function destroyBoxes() {
  divEl.innerHTML = "";
}

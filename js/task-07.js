const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputInput);

function onInputInput() {
  textEl.style.fontSize = `${inputEl.value}px`;
}

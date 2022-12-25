let counterValue = 0;
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

decrementEl.addEventListener("click", onDecrementButtonClick);
incrementEl.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue--;
  document.querySelector("#value").textContent = counterValue;
}
function onIncrementButtonClick() {
  counterValue++;
  document.querySelector("#value").textContent = counterValue;
}

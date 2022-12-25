const categories = document.querySelectorAll(".item");
console.log(`Number of categories:${categories.length}`);

//-----------------------------

categories.forEach((item) => {
  const titleEl = item.querySelector("h2");
  const listEl = item.querySelectorAll("li");
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${listEl.length}`);
});

const categories = document.querySelectorAll(".item");
console.log(`Number of categories:${categories.length}`);

//-----------------------------

categories.forEach((item) => {
  const titleEl = item.firstElementChild;
  const listEl = item.lastElementChild.children;
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${listEl.length}`);
});

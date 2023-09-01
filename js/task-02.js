const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.querySelector("#ingredients");

const itemsToAdd = [];

ingredients.forEach((ingredient) => {
  const itemOfList = document.createElement("li");
  itemOfList.textContent = ingredient;
  itemOfList.classList.add("item");
  itemsToAdd.push(itemOfList);
});

ingredientsListRef.append(...itemsToAdd);
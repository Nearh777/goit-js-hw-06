const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
console.log(listEl);

const ingredientsListEl = ingredients.forEach(element => {
  const makeLiEl = document.createElement('li');
  console.log(makeLiEl);
  makeLiEl.classList.add('item');
  makeLiEl.textContent = `${element}`;
  listEl.append(makeLiEl);
  console.log(makeLiEl);
});


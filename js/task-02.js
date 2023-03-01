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

const ingredientsListEl = ingredients.map(element => {
  const makeLiEl = document.createElement('li');
  console.log(makeLiEl);
  makeLiEl.classList.add('item');
  makeLiEl.textContent = `${element}`;
  return makeLiEl;
  
});
console.log(ingredientsListEl);
listEl.append(...ingredientsListEl);
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

ingredients.forEach(element) => {
  const makeLiEl = document.createElement('li');
  makeLiEl.classList.add('item');
  makeLiEl.textContent = element;
  //return makeLiEl;
};
ingredientsListEl.appendChild(makeLiEl);


// const elements = option => {
//   const ingredientsRef = document.createElement('li');
//   ingredientsRef.classList.add('item');
//   ingredientsRef.textContent = option;
  
//   return ingredientsRef;
// };

// const makeIngredients = opton => {
  
//   const ingredientsRef = document.createElement('li');
//   ingredientsRef.classList.add('item');
//   ingredientsRef.textContent = opton;
//   return ingredientsRef;
// };

// const elements = makeIngredients(ingredients);


// ingredientsListRef.append(...elements);

// const ingredientsRef = document.createElement('li');
// ingredientsRef.classList.add('item');
// console.log(ingredientsRef);


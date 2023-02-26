const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

// const elements = option => {
//   const ingredientsRef = document.createElement('li');
//   ingredientsRef.classList.add('item');
//   ingredientsRef.textContent = option;
  
//   return ingredientsRef;
// };

const makeIngredients = opton => {
  
  const ingredientsRef = document.createElement('li');
  ingredientsRef.classList.add('item');
  ingredientsRef.textContent = opton;
  return ingredientsRef;
};

const elements = makeIngredients(ingredients);


ingredientsListRef.append(...elements);

// const ingredientsRef = document.createElement('li');
// ingredientsRef.classList.add('item');
// console.log(ingredientsRef);

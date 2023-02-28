// const btnDecEl = document.querySelector('button[data-action="decrement"]');
// const btnIncEl = document.querySelector('button[data-action="increment"]');
// let counterEl = 0;
// btnDecEl.addEventListener("click", () => {
// counterValue -= 1;
// counterEl.textContent = counterValue;
// });
// btnIncEl.addEventListener("click", () => {
// counterValue += 1;
// counterEl.textContent = counterValue;
// });

const refs = {
    counterValue: document.querySelector('#value'),
    reduceClickButton: document.querySelector('[data-action="decrement"]'),
    addClickButton: document.querySelector('[data-action="increment"]'),
};
refs.reduceClickButton.addEventListener('click', (event) => {
  refs.counterValue.textContent -= 1;
  });
refs.addClickButton.addEventListener('click', (event) => {
let total = parseInt(refs.counterValue.textContent);
refs.counterValue.textContent = total + 1;
});

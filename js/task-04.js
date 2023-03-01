const btnDecEl = document.querySelector('button[data-action="decrement"]');
const btnIncEl = document.querySelector('button[data-action="increment"]');
let counterEl = document.querySelector("#value");
  let counterValue = 0;
  btnDecEl.addEventListener("click", () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
  });
  btnIncEl.addEventListener("click", () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
  });

// const links = {
//     counterValue: document.querySelector('#value'),
//     reduceClickButton: document.querySelector('[data-action="decrement"]'),
//     addClickButton: document.querySelector('[data-action="increment"]'),
// };
// links.reduceClickButton.addEventListener('click', (event) => {
//   refs.counterValue.textContent -= 1;
//   });
// links.addClickButton.addEventListener('click', (event) => {
// let total = parseInt(links.counterValue.textContent);
// links.counterValue.textContent = total + 1;
// });

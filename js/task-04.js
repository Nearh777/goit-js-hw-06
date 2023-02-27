const btnDecEl = document.querySelector('button[data-action="decrement"]');
const btnIncEl = document.querySelector('button[data-action="increment"]');
let counterEl = 0;
btnDecEl.addEventListener("click", () => {
counterValue -= 1;
counterEl.textContent = counterValue;
});
btnIncEl.addEventListener("click", () => {
counterValue += 1;
counterEl.textContent = counterValue;
});

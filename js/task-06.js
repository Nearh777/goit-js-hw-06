const inputEl = document.querySelector("#validation-input");
// const setFocusInput = document.querySelector("validation-input.valid");
// const removeFocusInput = document.querySelector("validation-input.valid");

inputEl.addEventListener("blur", () => {
  const inputLength = inputEl.dataset.length;
  
  if (inputLength >= 6) {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
  } else {
    inputEl.classList.add('invalid')
    inputEl.classList.remove('valid')
  };
  
});  

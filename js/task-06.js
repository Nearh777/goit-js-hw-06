const textInput = document.querySelector("#validation-input");
const setFocusInput = document.querySelector("validation-input.valid");
const removeFocusInput = document.querySelector("validation-input.valid");

setFocusInput.addEventListener("click", () => {
  textInput.focus();

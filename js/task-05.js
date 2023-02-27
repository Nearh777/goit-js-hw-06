const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
output.textContent = event.target.valua.trim();

if (event.target.value === "") {
output.textContent = "Anonymous";
});

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const trimmed = event.currentTarget.value.trim();
  output.textContent = trimmed === "" ? "Anonymous" : trimmed;
});

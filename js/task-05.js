const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", (event) => {
  const inputText = event.target.value;
  outputNameRef.textContent = inputText === "" ? "Anonymous" : inputText;
});
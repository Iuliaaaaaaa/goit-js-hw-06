const fontSizeControlerRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlerRef.addEventListener("input", () => {
  textRef.style.fontSize = `${fontSizeControlerRef.value}px`;
});
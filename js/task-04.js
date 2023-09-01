const counterValueRef = document.querySelector("#value");
const toDownBtn = document.querySelector("[data-action='decrement']");
const toUpBtn = document.querySelector("[data-action='increment']");

let value = 0;

toDownBtn.addEventListener("click", () => {
  value -= 1;
  counterValueRef.textContent = value;
});

toUpBtn.addEventListener("click", () => {
  value += 1;
  counterValueRef.textContent = value;
});
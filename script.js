const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");
const zeroButton = document.getElementById("zero");
const backspaceButton = document.getElementById("backspace");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
      currentInput = "";
    } else if (button.textContent === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = "Error";
      }
    } else if (button.textContent === "←") {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput += button.textContent;
    }
    display.textContent = currentInput;
  });
});

//calculator program

const display = document.getElementById("display");

function appendtoDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function deletevalue() {
  display.value = display.value.slice(0, -1);
}

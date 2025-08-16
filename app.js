// Simple Calculator Application
const prompt = require("prompt-sync")();

// Loop until valid numbers are entered
function getNumber(numberString) {
  while (true) {
    const number = parseFloat(prompt("Enter Number " + numberString + ": "));
    if (isNaN(number)) {
      console.log("Invalid input");
    } else {
      return number;
    }
  }
}

const number1 = getNumber("One");
const number2 = getNumber("Two");

// Prompt user for an operator
const operator = prompt("Enter Operator: ");

// Perform the operation based on the operator
let result;
let valid = true;
switch (operator) {
  case "+":
    result = number1 + number2;
    break;

  case "-":
    result = number1 - number2;
    break;

  case "/":
    if (number2 == 0) {
      valid = false;
      console.log("Zero division error.");
    }
    result = number1 / number2;
    break;

  case "*":
    result = number1 * number2;
    break;

  case "%":
    result = number1 % number2;
    break;

  default:
    console.log("Invalid Operator");
    valid = false;
    break;
}

// Display the result if the operation was valid
if (valid) {
  console.log(`Result: ${number1} ${operator} ${number2} = ${result}`);
}

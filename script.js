//1. Greet function:
// Define a function called greet that takes a name as an argument and returns a greeting message. For example, if the name is "Alice", the function should return "Hello, Alice!".
// Call the greet function you defined in the previous task with your name as the argument and log the result to the console.
// Modify the greet function to have a default argument of "Guest" for the name parameter. This means that if no name is provided, the function should return "Hello, Guest!".
// Rewrite the greet function as a function expression and store it in a variable called greetFunction.
// Rewrite the greet function as an arrow function.

const greet = (name = "Guest") => `Hello, ${name}!`;

// console.log(greet());
// console.log(greet('Alice'));

//2. Calculate Area:
// Define a function called calculateArea that takes two parameters, width and height, and returns the area of a rectangle (width * height).
// Call the calculateArea function with width = 5 and height = 10, and log the result to the console.
// Modify the calculateArea function to have a default value of 1 for both width and height. This means that if no arguments are provided, the function should return 1.
// Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction.
// Rewrite the calculateArea function as an arrow function.

const calculateAreaFunction = (width = 1, height = 1) => {
  const area = width * height;
  // console.log(area)
};
calculateAreaFunction(5, 10);
calculateAreaFunction();

//3. Higher Order and Callback functions:
// Define a function called higherOrderFunction that takes two parameters: num and callback. Inside higherOrderFunction, call the callback function and pass num as an argument.
// Define a function called callbackFunction that takes a number as an argument and logs it to the console. Call higherOrderFunction with a number and pass callbackFunction as the callback.
// Modify the call to higherOrderFunction, to pass a number and the same callback but as a function expression.
// In the call to higherOrderFunction, modify the callback function expression. The new function expression should log the square of the number to the console.
// In the call to higherOrderFunction, modify the callback function expression that takes two parameters, num1 and num2, and log their sum to the console. Make the necessary changes to higherOrderFunction to call the callback accordingly.

const higherOrderFunction = (num1, num2, callback) => {
  callback(num1, num2);
};
const callbackFunction = (num1, num2) => {
  // console.log(num1*num1)
  // console.log(num1+num2)
};
higherOrderFunction(4, 5, callbackFunction);

//4. Simple Mathematical Operations:
// Create a callback function doubleNumber that takes a number and returns its double.
// Create another callback function squareNumber that takes a number and returns its square.
// Create another callback function incrementNumber that takes a number and returns the number incremented by one.
// Define a function performOperation that accepts two parameters: num (a number on which to perform the operation), and operation (a callback function that specifies the operation to be performed on num). Inside performOperation, call the operation function and pass num as an argument. The function should return the result.
// Call performOperation with a number and each of the callback functions in turn to see the results of the operations. Log the result to the console for each call to performOperation.
// Observe the higher-order function, performOperation, to understand why higher-order functions are used.

const doubleNumber = (num) => {
  // console.log(num * 2);
};

const squareNumber = (num) => {
  // console.log(num * num);
};

const incrementNumber = (num) => {
  // console.log(num + 1);
};

const performOperation = (num, operation) => {
  operation(num);
};
performOperation(4, doubleNumber);
performOperation(4, squareNumber);
performOperation(4, incrementNumber);

//5. Basic Arithmetic Operations:
// Add: Create a callback function addNumbers that takes two numbers and returns their sum.
// Multiply: Create a callback function multiplyNumbers that takes two numbers and returns their product.
// Subtract: Create a callback function subtractNumbers that takes two numbers and returns the result of subtracting the second number from the first.
// Divide: Create a callback function divideNumbers that takes two numbers and returns the result of dividing the first number by the second, ensuring to handle division by zero.
// Define a function performArithmetic that accepts three parameters: num1 and num2 (the numbers on which to perform the operation), and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2).
// Call performArithmetic with different pairs of numbers and each of the callback functions to see the results of the arithmetic operations.
const addNumbers=(num1,num2)=>{
  console.log(num1+num2)
}

const multiplyNumbers=(num1,num2)=>{
  console.log(num1*num2)
}

const substractNumbers=(num1,num2)=>{
  console.log(num2-num1)
}

const divideNumbers=(num1,num2)=>{
  if(num2===0){
    console.log("Error: Division by zero is not allowed")
  }else{
    console.log(num1/num2)
  }
}

const performArithmetic=(num1,num2,operation)=>{
  operation(num1,num2)
}

performArithmetic(5,4,addNumbers)
performArithmetic(3,4,multiplyNumbers)
performArithmetic(4,8,substractNumbers)
performArithmetic(9,3,divideNumbers)
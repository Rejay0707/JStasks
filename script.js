// Functions

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
const addNumbers = (num1, num2) => {
  // console.log(num1+num2)
};

const multiplyNumbers = (num1, num2) => {
  // console.log(num1*num2)
};

const substractNumbers = (num1, num2) => {
  // console.log(num2-num1)
};

const divideNumbers = (num1, num2) => {
  if (num2 === 0) {
    // console.log("Error: Division by zero is not allowed")
  } else {
    // console.log(num1/num2)
  }
};

const performArithmetic = (num1, num2, operation) => {
  operation(num1, num2);
};

performArithmetic(5, 4, addNumbers);
performArithmetic(3, 4, multiplyNumbers);
performArithmetic(4, 8, substractNumbers);
performArithmetic(9, 3, divideNumbers);

// Objects and Classes

// Basic Objects:
//1. Define a variable named student and assign it an empty object.
// Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.
// Log the name property of the student object to the console.
// Update the age property of the student object to some random value, say 10. Log the age property of the student object to the console to see the updated property.
// Add a method called greet to the student object that logs a greeting message using the name property. Call the greet method to see the greeting message.

const student = {
  name: "Rejay",
  email: "rejaysobi@gmail.com",
  age: 23,
};
// console.log(student.name)
student.age = 10;
// console.log(student.age)

student.greet = () => {
  // console.log(`Hello my name is ${student.name}`)
};
student.greet();

//2. Nested Object:
// Create a new object inside the student object called address. Add properties to the address object for country, city, and pin_code. Set their values to your address details.
// Log the country property of the address object to the console.
// Update the pin_code property of the address object to a new pin code. Log the address object to the console to see the updated pin_code property.
const student1 = {
  name: "Rejay",
  email: "rejaysobi@gmail.com",
  age: 23,
  address: {
    country: "India",
    city: "Palappallam",
    pin_code: 629159,
  },
};
// console.log(student1.address.country)
student1.address.pin_code = 621978;
// console.log(student1.address)

//3.Class:
// Create a new object named friend with similar properties to the student object, but with values representing a friend's name, email, age, and address. Log the friend object to the console.
// Create a new object named topper with similar properties to the student object, but with values representing a topper’s name, email, age, and address. Log the friend object to the console.
// Define a class called Student that takes parameters for name, email, age, country, city, and pin_code. Inside the class, set these parameters as properties of the new object. Make sure to add the greet method inside the class.
// Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038).
// Create objects of the Student class for yourself, your friend, and another student. Log these objects to the console to see the created objects.
// Call the getFullAddress method on one of the Student objects and log the result to the console.

const friend = {
  name: "kishore",
  email: "kishore@gmail.com",
  age: 22,
  address: {
    country: "India",
    city: "Coimbatore",
    pin_code: 78872,
  },
};

const topper = {
  name: "rahul",
  email: "rahul@gmail.com",
  age: 22,
  address: {
    country: "India",
    city: "Coimbatore",
    pin_code: 78872,
  },
};

//console.log(topper)

class student2 {
  constructor(name, email, age, country, city, pin_code) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = {
      country: country,
      city: city,
      pin_code: pin_code,
    };
  }
  greet() {
    // console.log(`Hello my name is ${this.name}`);
  }
  getFullAddress(){
    // console.log(`${this.address.country},${this.address.city},${this.address.pin_code}`)
  }
}
const anand=new student2('Anand','anand@gmail.com',23,'India','Coimbatore',762896)
const myself=new student2('Rejay','rejay@gmail.com',23,'India','Palappallam',629159)
anand.greet()
anand.getFullAddress()
myself.getFullAddress()

//4. Employee Data:
// Define the Employee Class. The class should take parameters for name, email, age, department, position, and salary. Inside the constructor method, set these parameters as properties of the employee object.
// Add a method named introduce() inside the class that logs a greeting and the employee's name and position, e.g., "Hello everyone, I am Ayush, Senior Software Developer."
// Add a method named displaySalary() inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".
// Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. Log this object to the console.
// Create another object named manager with properties representing a manager. Log this object to the console.
// On the newEmployee object, call the introduce() method to see a greeting and role.
// Call the displaySalary() method on the manager object to log the salary details.
class Employee{
  constructor(name,email,age,department,position,salary){
    this.name=name;
    this.email=email;
    this.age=age;
    this.department=department;
    this.position=position;
    this.salary=salary;
  }
  introduce(){
    // console.log(`Hello everyone my name is ${this.name},${this.position}`)
  }
  displaySalary(){
    // console.log(`Salary ${this.salary}`)
  }
}
const rejay=new Employee('Rejay','rejaysobi@gmail.com',23,'Mechatronics','Full Stack Developer',40000)

rejay.introduce()
rejay.displaySalary()

//5. Book Data:
// Define the Book Class. The class should take parameters for title, author, publisher, year, and genre. Inside the constructor method, set these parameters as properties of the book object.
// Add a method named describe() that logs a brief description of the book, combining the title, author, and year, e.g., "Five Point Someone - Chetan Bhagat (2004).
// Add a method named displayGenre() that logs the genre of the book.
// Create an object named classicBook with properties representing a classic novel’s details. Log this object to the console.
// Create an object named sciFiBook with properties representing a science fiction book. Log this object to the console.
// On the classicBook object, call the describe() method to see a summary of the book.
// Call the displayGenre() method on the sciFiBook object to log the genre.

class Book{
  constructor(title,author,publisher,year,genre){
    this.title=title;
    this.author=author;
    this.publisher=publisher;
    this.year=year;
    this.genre=genre;
  }
  describe(){
    console.log(`${this.title} - ${this.author}(${this.year})`)
  }
  displayGenre(){
    console.log(`${this.genre}`)
  }
}
const book=new Book("To Kill a Mockingbird", "Harper Lee", "Penguin Books", 1960, "Fiction")
const classicBook=new Book("Pride and Prejudice","Jane Austen","T. Egerton, Whitehall",1813,"Romance, Satire")
const sciFiBook=new Book("Dune","Frank Herbert","G.P. Putnam's Sons",1965,"Science Fiction, Epic Space Opera")
book.describe()
book.displayGenre()
classicBook.describe()
classicBook.displayGenre()
sciFiBook.describe()
sciFiBook.displayGenre()
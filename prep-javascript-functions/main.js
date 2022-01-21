// Adding two numbers.
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log(sum);

// Converting hours to minutes.
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hours = convertHoursToMinutes(2);
console.log(hours);

// Getting a greeting.
function getGreeting(name) {
  return name;
}

var greeting = getGreeting('World');
console.log('Hello', greeting);

// Adding and multiplying by 5
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addMultiply = addAndMultiplyBy5(10, 5);
console.log(addMultiply);

// Multiplying and dividing by 5
function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyDivide = multiplyAndDivideBy5(35, 10);
console.log(multiplyDivide);

// Subtracting 2 numbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractNumbers = subtractTwoNumbers(22, 7);
console.log(subtractNumbers);

// Getting Circle Circumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

// Getting full name
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

// Find the cube of the value
function cube(number) {
  return number ** 3;
}

var cubed = cube(5);
console.log(cubed);

// 1- Write a function that greets a user, using a default parameter for the name.
function greetUser(name = "there") {
  return `Hello, ${name}!`;
}
console.log(greetUser());
console.log(greetUser("Mostafa"));
// 2- Write a function that calculates the total price with a default tax rate parameter.
function calculateTotalPrice(price, taxRate = 0.2) {
  return price + price * taxRate;
}
console.log(calculateTotalPrice(100));
console.log(calculateTotalPrice(100, 0.3));
// 3- Write a function that creates a user object, using a default role parameter.
function createUser(name, role = "user") {
  return { name, role };
}
console.log(createUser("Mostafa"));
console.log(createUser("Mohamed", "admin"));

// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiplyAll(...nums) {
  return nums.reduce((acc, n) => acc * n, 1);
}
console.log(multiplyAll(2, 3, 4));

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiplyFirstBySum(first, ...rest) {
  return first * rest.reduce((acc, n) => acc + n, 0);
}
console.log(multiplyFirstBySum(2, 4, 6, 8));

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function collectStrings(...strings) {
  return strings;
}
console.log(collectStrings("Mostafa", "Mohamed", "Elfar"));
// 7- Create a new array by combining two arrays using the spread operator.
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);

// 8- Copy an array using the spread operator.
const copiedArr = [...arr1];
console.log(copiedArr);

// 9- Merge two objects into one using the spread operator.
const obj1 = { name: "Mostafa", age: 23 };
const obj2 = { phone: "01096717241", address: "Assiut" };
const merged = { ...obj1, ...obj2 };
console.log(merged);
// 10- Update a property in an object using the spread operator to create a new object.
const user = { name: "Mostafa", role: "user" };
const updatedUser = { ...user, role: "admin" };
console.log(updatedUser);

// 11- Destructure an array to get the first and second elements into variables.
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first);
console.log(second);

// 12- Destructure an array to get the first element and the rest into another array.
const [DesArr, ...rest] = numbers;
console.log(DesArr);
console.log(rest);
// 13- Destructure an object to extract two properties into variables.
const person = { name: "Mostafa", age: 25, city: "Cairo" };
const { name, age } = person;
console.log(name);
console.log(age);
// 14- Destructure an object and rename the extracted properties.
const { name: fullName, age: years } = person;
console.log(fullName, years);

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function displayUser({ name, age }) {
  return `User: ${name}, Age: ${age}`;
}
console.log(displayUser(person));

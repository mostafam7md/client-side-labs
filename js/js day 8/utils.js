//1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.

export function greetUser(name) {
  return `Hello, ${name}!`;
}

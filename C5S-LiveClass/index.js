const prompt = require("prompt-sync")({ sigint: true });

// Function with parameters
// Modificar la función para que tome por parámetro un nombre y salude a esa persona cuando el lenguaje la ejecute.
function greetings(name) {
  console.log(`Hello, ${name} so long without being able to see you.`);
}
greetings("Jose");

// Modificar la función para que solicite al usuario ingresar su nombre con prompt.
function greetings2() {
  const name = prompt("What is your name? ");
  console.log(`Hello, ${name} so long without being able to see you.`);
}
greetings2();

// Realizar la misma función con template literals.
function greetings2(name) {
  const message = "Hello, so long without being able to see you";
  console.log(message + name);
}
greetings2("Daniel");
greetings2("Diego");

function greetings3(name) {
  const message = "Hello, so long without being able to see you";
  console.log(`${message} ${name}`);
}
greetings3("Daniel");
greetings3("Diego");

// Elegir alguna de las funciones anteriores y pasarla a función expresada y función flecha.
const greetings4 = function (name) {
  const message = "Hello, so long without being able to see you";
  console.log(`${message} ${name}`);
};
greetings4("Daniel");
greetings4("Diego");

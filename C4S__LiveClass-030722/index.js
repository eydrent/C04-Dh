const prompt = require("prompt-sync")({ sigint: true });

// Variable de puntos (debajo de la palabra Mario)
let marioPoints = 0;
// Cantidad de monedas
let coins = 0;
// Número de nivel
let lvl = 1;
// Número de mundo
let worldNumber = 1;
// Tiempo restante para terminar el nivel.
let timeToEnd = 913;
// Aunque en esta pantalla no la veamos, también tenemos una variable que indica la cantidad de vidas restantes.
let lifes = 3;
let remainingLives = 3;
// Cada bloque misterioso tiene una cantidad de monedas, esa cantidad está guardada en una variable. ¿Qué le pasará a la variable cada vez que Mario golpee el bloque? (Dato de color, Mario le pega con el puño, no con la cabeza)
let pushCoins = 25;
// Si hilamos fino, podríamos pensar que el estado de Mario puede almacenarse en una variable. ¿Es grande Mario? En el caso de que la variable esté en “Verdadero” (porque tocó un hongo) cuando toque a algún enemigo no pierde vida, sino que cambia su estado a pequeño.

// mario
// big - true
// size - big
// status - mature
// price - 2

let mario = {
  isBig: false,
  touch: false,
  size: "small",
};

console.log(mario);

// Declara 3 variables y asígnales un valor. Siempre teniendo en cuenta que los nombres deben ser descriptivos:
// Numérica
// String
// Booleana
let edad = 25; // Numérica
let fullName = "Jose Ospina"; // String
let isGraduated = true; // Bool

// Mostrarlas por la consola en 3 console.log distintos (uno por cada variable)
console.log(edad);
console.log(fullName);
console.log(isGraduated);

// Ahora modifica tus console.log para que ahora se muestran las 3 variables en el mismo console.log
console.log(
  `edad: ${edad}, Nombre completo: ${fullName}, Esta graduado: ${isGraduated}`
);

// Tomémonos un rato para armar las variables del juego de Mario y de una Persona. Recuerden guardar los dos como archivos separados en la carpeta correspondiente.
//Mario
let mario2 = {
  isBig: false,
  touch: false,
  size: "small",
};

//Persona
let persona = {
  name: false,
  lastName: false,
  age: "25",
  height: 1.7,
  city: "Medellin",
  birthday: "10/08/1996",
  studyField: "Software Development",
  jobTitle: "Web UI Developer",
  isStudying: true,
  isHappy: true,
};

// Solicitar que el usuario ingrese su nombre utilizando el prompt. Imprimilo en consola mostrando la etiqueta “Nombre:” seguida del valor ingresado por ejemplo “Nombre: Juan”
let name = prompt("Ingresa tu nombre: ");
console.log(`Hola ${name}, bienvenido a nuestra plataforma.`);

// Imprimir en consola la comparación de nuestra variable cantidad de vidas restante con el valor 0.
console.log(`Vidas restantes es igual a 0: ${remainingLives === 0}`);

// Descontar una vida a esa variable y volver a imprimir la comparación, además del nuevo valor de la variable.
console.log(`Vidas restantes: ${remainingLives}`);
--remainingLives;
console.log(`Vidas restantes es igual a 0: ${remainingLives === 0}`);
console.log(`Vidas restantes: ${remainingLives}`);

// 1)Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
const get10numsAfter = (num) => {
  for (let i = num; i <= num + 10; i++) {
    console.log(i);
  }
};
console.log(get10numsAfter(10));

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
const jum3by3 = () => {
  for (let i = 5; i <= 20; i += 3) {
    console.log(i);
  }
};
// console.log(jum3by3());

// 3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
const getTotalPlus = () => {
  let result = 0;
  for (let i = 0; i <= 100; i++) {
    result += i;
  }
  return result;
};
console.log(getTotalPlus());

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.
const getNumFactorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(getNumFactorial(5));

// 5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.
const getFibonacci = (num) => {
  let prev = 0;
  let plus = 1;
  let next;
  for (let i = 0; i <= num; i++) {
    console.log(prev);
    next = prev + plus;
    prev = plus;
    plus = next;
  }
};
// console.log(getFibonacci(5));
getFibonacci(5);

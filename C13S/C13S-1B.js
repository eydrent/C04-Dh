let evenNumLoop = function (num) {
  for (let i = 0; i < 100; i++) {
    let x = i + num;
    if (x % 2 === 0) {
      console.log(`El numero ${x} es par`);
    }
  }
};
evenNumLoop(30);

const addition = function (num) {
  let x = num;
  for (let i = 1; i < num; i++) {
    x += i;
    // console.log(x);
  }
  return x;
};
console.log(addition(2));

const newArray = function (num) {
  let x = [];
  for (let i = 0; i <= num; i++) {
    x.push(i);
  }
  return x;
};
console.log(newArray(5));

const split = function (string) {
  let x = [];
  for (let i = 0; i < string.length; i++) {
    x.push(string[i]);
  }
  return x;
};
console.log(split("hola"));

const middleString = function (string) {
  if (string.length % 2 === 0) {
    let position = string.length / 2;
    // console.log(position);
    return `${string[position - 1]}${string[position]}`;
  } else {
    let position = Math.floor(string.length / 2);
    return `${string[position]}`;
  }
};
console.log(middleString("arina"));

const moveCeros = (array) => {
  let x = [];
  let y = [];
  for (let number of array) {
    number !== 0 ? x.push(number) : y.push(number);
  }
  x = x.concat(y);
  // console.log(y);
  return x;
};
console.log(moveCeros([1, 2, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10]));

const arrayHandler = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);
  }
};
arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"]);

const toCamelCase = (string) => {
  let x = string.split(/_|-/);
  let y = "";
  for (let i = 0; i < x.length; i++) {
    if (i === 0) {
      y += x[i];
    } else {
      y += x[i][0].toUpperCase() + x[i].slice(1);
    }
  }
  return y;
};
console.log(toCamelCase("hola_que-tal"));

const palindrome = (string) => {
  let x = string.split("");
  let y = x.reverse();
  let z = y.join("");
  return z === string;
};
console.log(palindrome("anilina"));

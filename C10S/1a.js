// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])
// // Undefined

// let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
// console.log(grupoDeAmigos[5])
// // Ironman

// let str = “un string cualquiera”
// let arrayAleatorio= ["Digital", "House", “true”, "string", "123","false", “54”, str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])
// // Error

let movies = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
let animatedMovies = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

function arrayToUpperCase(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
    console.log(array[i]);
  }
}

function combineArrays(array1, array2) {
  movies = array1.concat(array2);
  return arrayToUpperCase(movies);
}

combineArrays(movies, animatedMovies);
console.log(movies);
movies.pop();
console.log(movies);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function scoresIsEqual(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    // console.log(array1[i]);
    // console.log(array2[i]);
    let isEqual = array1[i] === array2[i];
    if (isEqual === false) {
      return isEqual;
    }
    console.log(isEqual);
  }
}

scoresIsEqual(asiaScores, euroScores);

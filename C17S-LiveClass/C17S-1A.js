// Matrix 2x2
let numArray = [
  [1, 2],
  [3, 4],
];

console.log(numArray[0][1]);

// for (let i = 0; i < numArray.length; i++) {
//   for (let j = 0; j < numArray[i].length; j++) {
//     console.log(numArray[i][j]);
//   }
// }

let arrayArrow = numArray.length;
for (let i = 0; i < arrayArrow; i++) {
  let arrayColumn = numArray[i].length;
  for (let j = 0; j < arrayColumn; j++) {
    console.log(numArray[i][j]); // arrow = [i][j] - column = [j][i]
    // console.log(numArray[i][j]); // arrow = [i][j]
    // console.log(numArray[j][i]); // column = [j][i]
  }
}

function get10x10Matrix() {
  let counter = 0;
  let matrix = [];
  for (let i = 1; i <= 10; i++) {
    let arrow = [];
    for (let j = 1; j <= 10; j++) {
      counter++;
      arrow.push(counter);
    }
    matrix.push(arrow);
  }
  return matrix;
}

let matrix10por10 = get10x10Matrix();
console.log(matrix10por10);
console.table(matrix10por10);

function getNxMatrix(arrows, columns) {
  let matrix = [];
  for (let index = 0; index < arrows; index++) {
    let array = [];
    for (let j = 0; j < columns; j++) {
      array[j] = j + 1 + index * arrows;
    }
    matrix.push(array);
  }
  return matrix;
}

let matrix = getNxMatrix(10, 10);
console.table(matrix);

function getMatrixAddition(newMatrix) {
  let sum = 0;
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      sum += newMatrix[i][j];
    }
  }
  return sum;
}

console.log(getMatrixAddition(matrix));

function getDiagonalMatrixAddition(newMatrix) {
  let sum = 0;
  for (let i = 0; i < newMatrix.length; i++) {
    sum += newMatrix[i][i];
    console.log(newMatrix[i][i]);
  }
  return sum;
}
console.log(getDiagonalMatrixAddition(matrix));

function getDgInvtMatrixAdd(newMatrix) {
  let sum = 0;
  let j = newMatrix.length;
  for (let i = 0; i < newMatrix.length; i++) {
    j--;
    sum += newMatrix[i][j];
    console.log(newMatrix[i][j]);
  }
  return sum;
}
console.log(getDgInvtMatrixAdd(matrix));

// function getDgInvtMatrixAdd(newMatrix) {
//   let sum = 0;
//   // let j = newMatrix.length;
//   for (let i = 0, j = newMatrix.length; i < newMatrix.length; i++, j--) {
//     console.log(`${j} jjjj`);
//     // j--;
//     sum += newMatrix[i][j];
//     console.log(newMatrix[i][j]);
//   }
//   return sum;
// }
// console.log(getDgInvtMatrixAdd(matrix));

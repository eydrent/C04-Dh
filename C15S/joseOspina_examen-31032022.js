// Exercise #1
let student = {
  name: "Jose",
  lastName: "Ospina",
  age: 20,
  camada: 20,
  isQuiz: true,
};

console.log(student);

const futureGrade = (grade) => {
  let status = "";
  if (grade < 4) {
    let status = "Desaprobado";
    return `El alumno obtuvo una nota igual a ${grade} por lo tanto su condición es ${status}`;
  } else if (4 <= grade < 7) {
    let status = "Debe rendir examen final";
    return `El alumno obtuvo una nota igual a ${grade} por lo tanto su condición es ${status}`;
  } else if (grade >= 7) {
    let status = "Promocionado";
    return `El alumno obtuvo una nota igual a ${grade} por lo tanto su condición es ${status}`;
  } else {
    return "No se pudo determinar la condición";
  }
};

console.log(futureGrade(6)); // log de prueba

// Exercise 2
const classes = [
  {
    name: "Andrea",
    lastName: "Bedoya",
    bimester: 3,
  },
  {
    name: "Daniela",
    lastName: "Embus",
    bimester: 4,
  },
  {
    name: "Maria",
    lastName: "Celi",
    bimester: 5,
  },
];

console.log(classes);

const nextCoursed = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].bimester++;
  }
};
nextCoursed(classes);
console.log(classes);

// Exercise 3
const minAttendance = 23;
let finalProgress;
let finalStudentStatus;
const checkStatus = (attendance, finalProgress) => {
  if (attendance >= minAttendance && finalProgress === 100) {
    finalStudentStatus = "Aprobado";
    return finalStudentStatus;
  } else {
    finalProgress = "Desaprobado";
    return finalProgress;
  }
};

console.log(checkStatus(23, 100)); // log de prueba

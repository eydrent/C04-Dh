let pets = [
  {
    name: "Max",
    type: "dog",
    age: 3,
    sound: "woof",
    breed: "labrador",
    soundActive() {
      return `${this.sound}, ${this.sound}`;
    },
  },
  {
    name: "Angel",
    type: "cat",
    age: 2,
    sound: "meow",
    breed: "persa",
    soundActive() {
      return `${this.sound}, ${this.sound}`;
    },
  },
  {
    name: "Jasper",
    type: "dog",
    age: 1,
    sound: "woof",
    breed: "criollo",
    soundActive() {
      return `${this.sound}, ${this.sound}`;
    },
  },
];

console.log(
  `Tu mascota ${pets[0].name} hace este sonido: ${pets[0].soundActive()}`
);

const increaseAge = (myPets) => {
  pets.forEach((pet) => {
    pet.age++;
  });
};

console.log(pets);
increaseAge(pets);
console.log(pets);

const alicia = [100, 100, 100];
const bob = [100, 50, 100];

function findWinner(a, b) {
  let aScore = 0;
  let bScore = 0;

  for (let i = 0; i < a.length; i++) {
    a[i] === b[i] ? 0 : a[i] > b[i] ? aScore++ : bScore++;
  }
  return (
    (aScore === bScore && "Ohh there is a tie between participants") ||
    (aScore > bScore ? " The winner is: Alicia" : " The winner is: Bob")
  );
}

let result = findWinner(alicia, bob);

console.log(result);

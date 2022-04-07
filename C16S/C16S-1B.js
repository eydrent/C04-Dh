// 1
const exerciseOne = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}, fizzbuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i}, fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}, buzz`);
    } else {
      console.log(i);
    }
  }
};
exerciseOne(100);

// 2
const getArrayValue = (array, index) => {
  return array[index];
};
console.log(getArrayValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// 3
const getMonthDaysNum = (month) => {
  let monthDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  return `The month ${month} has ${monthDays[month]} days`;
};
console.log(getMonthDaysNum(2));

// 4
const reverseNum = (num) => {
  return parseInt(num.toString().split("").reverse().join(""));
};
console.log(reverseNum(42));

// 5
function getRepeatElements(array) {
  let repeated = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    array.splice(i, 1);
    if (
      array.includes(element) === true &&
      repeated.includes(element) === false
    ) {
      repeated.push(element);
    }
    array.splice(i, 0, element);
  }
  return repeated;
}
console.log(getRepeatElements([2, 3, 4, 4, 5, 5]));

let brands = [
  { id: 1, name: "Apple", value: 355_080, incrementValue },
  { id: 2, name: "Amazon", value: 350_273, incrementValue },
  { id: 3, name: "Google", value: 263_425, incrementValue },
  { id: 4, name: "Microsoft", value: 184_245, incrementValue },
  { id: 5, name: "Walmart", value: 111_918, incrementValue },
];

function incrementValue(increment) {
  this.value += this.value * increment;
}

function getObject(brand) {
  let object = brands.filter((element) => {
    return element.name === brand;
  });

  return object;
}

function incrementBrandsValue(increment) {
  brands.forEach((element) => {
    element.incrementValue(increment);
  });
}

function setId() {
  return brands.length + 1;
}

function addNewBrands(newBrands) {
  newBrands.forEach((element) => {
    element = { id: setId(), ...element };
    brands.push(element);
  });
}

console.log(getObject("google"));
incrementBrandsValue(0.1);
console.log(brands);
addNewBrands([
  {
    name: "Samsung",
    value: 107_284,
    incrementValue,
  },
  {
    name: "Facebook",
    value: 101_201,
    incrementValue,
  },
  {
    name: "ICBC",
    value: 75_119,
    incrementValue,
  },
  {
    name: "Huawei",
    value: 71_233,
    incrementValue,
  },
  {
    name: "Verizon",
    value: 69_639,
    incrementValue,
  },
]);
console.log(brands);

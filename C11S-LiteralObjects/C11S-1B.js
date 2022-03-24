function incrementValue(increment) {
  this.value += this.value * increment;
}

// create general object
generalObject = {
  brands: [
    { id: 1, name: "Apple", value: 355_080, incrementValue },
    { id: 2, name: "Amazon", value: 350_273, incrementValue },
    { id: 3, name: "Google", value: 263_425, incrementValue },
    { id: 4, name: "Microsoft", value: 184_245, incrementValue },
    { id: 5, name: "Walmart", value: 111_918, incrementValue },
  ],
  getObject(brand) {
    let object = this.brands.filter((element) => {
      return element.name === brand;
    });
    return object;
  },
  incrementBrandsValue(increment) {
    this.brands.forEach((element) => {
      element.incrementValue(increment);
    });
  },
  addNewBrands(newBrands) {
    newBrands.forEach((element) => {
      element = { id: this.setId(), ...element };
      this.brands.push(element);
    });
  },
  setId() {
    return this.brands.length + 1;
  },
  //   incrementValue(increment) {
  //     this.value += this.value * increment;
  //   },
};

// Use general object
console.log(generalObject.getObject("Google"));
generalObject.incrementBrandsValue(0.1);
console.log(generalObject.brands);
generalObject.addNewBrands([
  {
    // id: 6,
    name: "Samsung",
    value: 107_284,
    incrementValue,
  },
  {
    // id: 7,
    name: "Facebook",
    value: 101_201,
    incrementValue,
  },
  {
    // id: 8,
    name: "ICBC",
    value: 75_119,
    incrementValue,
  },
  {
    // id: 9,
    name: "Huawei",
    value: 71_233,
    incrementValue,
  },
  {
    // id: 10,
    name: "Verizon",
    value: 69_639,
    incrementValue,
  },
]);
console.log(generalObject.brands);

console.log(generalObject.getObject("Verizon"));

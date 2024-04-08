let person = {
  name: "Thor",
  age: 5000,
  location: { city: "Asgard" },
  favoriteBands: ["Avenged Sevenfold", "Metallica", "Slipknot"],
  weapon: "Mjonir",
  battleRoar: function () {
    console.log("FOR ASGARD");
    return "Sweet";
  },
};

let myVar = "name";

// console.log(person.myVar);

// console.log(person[myVar]);// Thor

let cat1 = {
  name: "pumpkin",
  age: 3,
  color: "orange",
  "1key": null,
  "is cute": true,
};

// console.log(cat1.name);
// // console.log(person.1key);
// console.log(cat1['1key']);// null

// // console.log(cat1.is cute);
// console.log(cat1['is cute']);

// console.log(cat1.myVar);
// console.log(cat1[myVar]);// pumpkin

let car = {};

car.model = "challenger";
console.log(car); // { model: 'challenger' }

car["year"] = 2016;
console.log(car);

function makeCar(param1, make, year) {
  let obj = {};
  // obj.param1 = param1;
  obj[param1] = param1;
  obj.make = make;
  obj.year = year;
  // console.log(obj)
}

// console.log(makeCar('mustang', 'ford', 2024))

console.log(car);

car.stats = {};
console.log(car);
car.stats.mpg = 15;
console.log(car);

car.model = "mustang";

console.log(car);

delete car.year;
console.log(car);

let arr = {
  0: "a",
  1: "b",
  2: "c",
  "is string": true,
  name: "",
};

console.log(arr[0]); // a

let me = {
  firstName: "brandon",
  lastName: "laursen",
};

console.log(me.firstName + " " + me.lastName);

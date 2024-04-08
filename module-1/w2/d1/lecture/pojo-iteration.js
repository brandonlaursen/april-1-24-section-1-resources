
let people = {
  person1: {
    name: "brandon",
  },
  person2: {
    name: "maica",
  },
  person3: {
    name: "charles",
  },
  person4: {
    name: "trevor",
  },
};


// console.log(people.person1);
// console.log(people.person2);

// for(let key in people){
//   // console.log(key, people);
//   let value = people[key]
//   console.log(value.name);
// }

let brandon2 = {
  name: "brandon",
  age: 27,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: {
    city: "Tampa",
    state: "Florida",
  },
  sayHello: function (name) {
    return "Hello " + name;
  },
};

// for(let key of brandon2){
//   // console.log(key);
//   let value = brandon2[key]
//   // console.log(value)
// }

let keys = Object.keys(brandon2);
// console.log(keys);
//  'name', 'age', 'favoriteBands', 'location', 'sayHello' ]

// for(let i = 0; i < keys.length; i++){
  // let key = keys[i];
  for(let key of keys) {
  // console.log(key);
  let value = brandon2[key];
  console.log(value);
}

let values = Object.values(brandon2);
// console.log(values);

let entries = Object.entries(brandon2);
console.log(entries);

// for(let [key, value] of entries){
//   console.log(key, value);
// }

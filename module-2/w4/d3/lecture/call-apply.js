class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
      this.name
  }
  purrNTimes(n, n2) {
    console.log(n, n2)
      for(let i = 0; i < n; i++) {
          console.log(`${this.name} says: meow`);
      }
      return 'done'
  }
}

let dog = new Dog('Scooby');
let cat = new Cat('Garfield');

// function.call(context, args);
// function.apply(context, [args]);
// cat.purrNTimes.call(dog, 5, 6);
// let res = cat.purrNTimes.apply(dog, [5, 6]);
// console.log(res);


const obj = { name: 'challenger', make: 'dodge', model: 'hellcat', makeNoise: () =>  `${this.name} Car goes vrooom`  }


class Car {
  constructor(name, make, model){
    this.name = name;
    this.make = make;
    this.model = model;
    Car.numCars += 1;
  };


  makeNoise(){
    return `${this.name} Car goes vrooom`;
  };

  static numCars = 0;

  static getCars(...cars) {
    cars.forEach(car => {
      if(!car instanceof Car) {
        console.log(car.makeNoise());
        // throw new Error('that aint a car');
      }
    });

    // return cars.map(car => car.name);
  }

  // instanceoF

}

const challenger = new Car('challenger', 'dodge', 'hellcat');
// console.log(challenger);// Car { name: 'challenger', make: 'dodge', model: 'hellcat' }
const mustang = new Car('mustang', 'ford', 'shelby');
// console.log(mustang);// Car { name: 'mustang', make: 'ford', model: 'shelby' }
// console.log(mustang.makeNoise());
// console.log(challenger.makeNoise());
// console.log(Car.numCars);
// console.log(mustang.numCars)
console.log(Car.getCars(challenger, mustang));
// console.log(Car.makeNoise());

// let arr = [1,2,3];
// let arr1 = new Array(1,2,3)
// arr1.slice()

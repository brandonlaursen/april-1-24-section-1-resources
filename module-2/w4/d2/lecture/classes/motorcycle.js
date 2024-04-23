

const Car = require('./car');



class Motorcycle extends Car{
  constructor(name, make, model, milage){
    super(name, make, model);

    this.milage = milage;
    this.noise = 'humbrubrubuhrburbhbh';
    Motorcycle.numVehicles += 1

  }

  makeNoise() {
    return `${this.name} Motorcycle goes humbrubrubuhrburbhbh`;
  };

  static numVehicles = 0;

}

const harley = new Motorcycle('Harley', 'harley davidson', 'sportster', 50);


class Bicycle extends Motorcycle{
  constructor(name){
    super(name);
    this.name = name;
  }
}

const bike = new Bicycle('beach crusier');
console.log(bike)

// console.log(harley.makeNoise());
// console.log(Motorcycle.numVehicles)

class Truck extends Car{
};

const F150 = new Truck('f150', 'ford', 'raptor');
// console.log(F150);

function myFunc(){
  let name = 'brandon';

  function myfunc2(){
    // let name = 'maica';

    console.log(name)
  }
}

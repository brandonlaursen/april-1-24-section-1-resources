


function sayHello(name) {
	console.log(this) // Global object in node, window in browser
	console.log('hello ' + name)
}

// sayHello('maica') // hello maica


const elephant = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};


// elephant.whatIsThis();
// elephant.sayAge(); // my name is funkfreed and i am 1


const elephant2 = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

// let sayAgeFunc = elephant2.sayAge;
// console.log(sayAgeFunc)

// sayAgeFunc();
// // my name is undefined and i am undefined


const elephant3 = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

// // function.bind(context)
// let boundSayAgeFunc = elephant3.sayAge.bind(elephant3);
// console.log(boundSayAgeFunc);// [Function: bound sayAge]

// boundSayAgeFunc();// my name is funkfreed and i am 1


const elephant4 = {
	name: 'funkfreed',
	age: 1
}

const cat = {
	name: 'mochi',
	age: 2
}

function sayAge() {
	console.log(`my name is ${this.name} and i am ${this.age}`);
}

// sayAge()
// elephant4.sayAge();
let elephantBoundFunc = sayAge.bind(elephant4);
// elephantBoundFunc();// my name is funkfreed and i am 1
let catBoundFunc = sayAge.bind(cat);
// catBoundFunc();// my name is mochi and i am 2


const dragon = {
  name: "Smaug",
  sayName: function () {
    console.log("Hello my name is " + this.name);
  }
};

const orc = {
  name:'Azog',
}

// let dragonNameFunc = dragon.sayName.bind(dragon);
// dragonNameFunc();

let orcNameFunc = dragon.sayName.bind(orc);
// orcNameFunc();// Hello my name is Azog

// let myFunc = dragon.sayName
// console.log(myFunc);

// let orcNameFunc2 = myFunc.bind(orc);

// orc.myFunc();
// orc.sayName = dragon.sayName;
// orc.sayName();// Hello my name is Azog


class Cat {
  constructor(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;

  }
  print() {
      console.log(this)
  }

  // ! Talk about when going over arrow functions
  fatArrowPrint = () => console.log(this)

  static printCats(cats) {
      return cats.forEach(cat => {
          console.log(cat)
      })
  }

}

let newCat = new Cat('Pumpkin', 3, 'Ragamuffin')
newCat.print() //this refers to the newCat object that is an instance of Cat class;
// Cat { name: 'Pumpkin', age: 3, breed: 'Ragamuffin' }

// * weve lost context
let printCat = newCat.print;
// printCat();// undefined

let bindPrintCat = newCat.print.bind(newCat);
bindPrintCat();// Cat { name: 'Pumpkin', age: 3, breed: 'Ragamuffin' }

// let arrowPrintName = newCat.fatArrowPrint;
// arrowPrintName();// Cat { name: 'Pumpkin', age: 3, breed: 'Ragamuffin'

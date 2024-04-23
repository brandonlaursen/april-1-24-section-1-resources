





class Person {

  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.introduce();
  };

  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  };

  static introducePeople(people){
    if(!Array.isArray(people)){
      throw new Error( "introducePeople only takes an array as an argument.")
    }

    for(let person of people) {
      if(!(person instanceof Person)) {
        throw new Error( "All items in array must be Person class instances.")
      }
    }

    people.forEach(person => person.introduce());
  }

}




let person = new Person("kristen", "chauncey", 38);
// console.log(person);
const person2 = new Person("jeff", "granoff", 30);

Person.introducePeople([person, person2]);
// Person.introducePeople(person);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}

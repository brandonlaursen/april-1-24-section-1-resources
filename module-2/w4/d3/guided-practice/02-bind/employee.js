// Your code here

class Employee {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }

  sayName() {
    console.log(`${this.name} says hello`);
  }
  sayOccupation() {
    console.log(`${this.name} is a ${this.occupation}`);
  }
}

// const employee1 = new Employee('brandon', 'instructor')
// // console.log(employee1);

// try {
//   module.exports = Employee;
// } catch {
//   module.exports = null;
// }

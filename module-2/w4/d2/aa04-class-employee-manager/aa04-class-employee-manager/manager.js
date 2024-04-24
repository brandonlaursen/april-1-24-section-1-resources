const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager)
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee)
        return employee
    }

    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier;
      }

      _totalSubSalary() {
        let totalSubSalary = 0;

        this.employees.forEach((employee) => {
          if (employee instanceof Manager) {
            totalSubSalary += employee.salary + employee._totalSubSalary();
          } else {
            totalSubSalary += employee.salary;
          }
        });
        return totalSubSalary;
      }
}

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log(splinter);

// const splinter = new Manager('Splinter', 100000, 'Sensai');
// console.log('Before: ', splinter);

// const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
// const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
// const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// splinter.addEmployee(leo);
// splinter.addEmployee(mikey);
// splinter.addEmployee(donnie);
// splinter.addEmployee(raph);

// console.log('After: ', splinter);

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log('Before: ', splinter);

// const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
// const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
// const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// console.log('After: ', splinter);


module.exports = Manager;

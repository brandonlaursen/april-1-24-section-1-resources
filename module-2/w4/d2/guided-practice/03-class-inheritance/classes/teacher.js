const Person = require('./person');


class Teacher extends Person{
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(...teachers){
    console.log(teachers)
    // let count = 0;
    // for(const teacher of teachers){
    //   count += teacher.yearsOfExperience;
    // };

    // return count;
    return teachers.reduce((count, teacher) => count += teacher.yearsOfExperience,0)
  }
}



// teacher1 = new Teacher("susan", "jones", "biology", 5);
// teacher2 = new Teacher("bobby", "roberts", "math", 15);

// console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}

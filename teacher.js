import Person from "./person.js"; 


class Teacher extends Person {
    constructor(firstName,lastName,gender, degree){
      super(firstName,lastName,gender);

      this.degree = degree;
            
    }

    degree ="";

  }
 
  const thisStudentReg = new Teacher ('Science','Teacher3','2022','200');
console.log(thisStudentReg);

  export default Teacher;
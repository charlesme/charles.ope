import Person from "./person";

class Student extends Person{
    constructor(firstName,lastName,gender,StudentId){
        super(firstName,lastName,gender);

      this.StudentId = StudentId;
    };
   
    StudentId = " ";
  }

  export default Student;

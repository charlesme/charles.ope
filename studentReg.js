import Academics from "./academic.js";

class StudentReg extends Academics {
    constructor(semester,year,studentId,faculty, department){
      super(semester,year,studentId);

      this.faculty = faculty;
      this.department = department;
      this.studentId = studentId;
    };

    faculty ="";
    department ="";
    studentId = "";

  };


  export default StudentReg;
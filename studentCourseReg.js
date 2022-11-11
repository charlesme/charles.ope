import StudentReg from "./studentReg.js";
import Course from "./course.js";

class StudentCourseReg extends StudentReg {

    arrayofCourses = []
    constructor(semester,year,studentId,faculty, department, arrayofCourses){
      super(semester,year,studentId, faculty, department);

      this.arrayofCourses = arrayofCourses;
      
    };

   
    TotalCourse(){
        return this.arrayofCourses.length;
    }

    TotalCompulsory(){
        //this.arrayofCourses.filter(c => c.Type === 1).length;
        let compulCount = 0
        for(let i in this.arrayofCourses){
            if(this.arrayofCourses[i].Type === 1){
                compulCount++
            }
        }
        return compulCount;
    }

    TotalElective(){
        let electCount = 0
        for(let x in this.arrayofCourses){
            if(this.arrayofCourses[x].Type ===0){
                electCount++
            }
        }
        return electCount;
    }
  };
    
//   const TotalCourse = Course
//   let length = Course.length;
   


  export default StudentCourseReg;
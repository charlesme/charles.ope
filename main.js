import Course from "./course.js";
import Teacher from "./teacher.js";
import StudentReg from "./studentReg.js";
import StudentCourseReg from "./studentCourseReg.js";


const thisTeacher = new Teacher('Yemi','Bebe','F','B.Sc');

const studentCourseReg = new StudentCourseReg('First', '2022','002n','Law','English',Course);
// studentCourseReg.TotalCourse()
// studentCourseReg.TotalCompulsory()

console.log(thisTeacher.firstName);
console.log(thisTeacher.lastName);
console.log(thisTeacher.degree);

// const thisStudentReg = new StudentReg ('2022','Science');
// console.log(thisStudentReg.department);

console.log("total course",studentCourseReg.TotalCourse()
)
console.log("compulsory count",studentCourseReg.TotalCompulsory()
)
console.log("elective count", studentCourseReg.TotalElective())

// let courseCnt = Course.length;
// console.log(courseCnt);


// let courseCnt = Course[0].length;
// console.log(courseCnt);

// console.log(Course[0]);

//  let courseTyp;
//  if (TypCount == 0){
//     courseTyp = 'Elective';
// }
//  else {
//     courseTyp = 'Compulsory';
//  }
//  let TypCount = courseTyp.length;
// console.log(TypCount);


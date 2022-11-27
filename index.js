import * as classroom from './classroom.js'
import ClassroomService from './ClassroomService.js'
import PrintService from './PrintService.js'

const printService = new PrintService()
const classroomService = new ClassroomService(printService, classroom.students)
// processStudents
// console.log(classroomService.processStudents())
// classroomService.addNewStudent()
classroomService.addNewStudent()
classroomService.addNewStudent()
classroomService.addNewStudent()
classroomService.addNewStudent()
classroomService.addNewGrade();
classroomService.addNewGrade();

// #1
classroomService.displayAllStudents();
// #2
classroomService.totalStudents();
// #3
classroomService.displayNames();
// #4 
classroomService.deleteLast();
// #5
classroomService.deleteRandom();
// #6
classroomService.displayFemales();
// #7
classroomService.displayNumberOfGender();
// #8
classroomService.allFemaleStudents();
// #9 
classroomService.displayYoungAdults();
// #10 add new student
classroomService.addNewStudent();
classroomService.displayAllStudents()
// #11
classroomService.displayYoungestStudent();
// #12
classroomService.displayAverageAge(classroom.students);
// #13
classroomService.displayAverageAge(classroomService.filterFemales());
// #14
classroomService.addNewGrade();
// #15
classroomService.sortByName();



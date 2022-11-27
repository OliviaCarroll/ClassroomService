import * as classroom from './classroom.js'
import ClassroomService from './ClassroomService.js'
import PrintService from './PrintService.js'

const printService = new PrintService()
const classroomService = new ClassroomService(printService, classroom.students)
// processStudents
// console.log(classroomService.processStudents())

// #1
classroomService.displayAllStudents();
// #2
console.log(classroomService.totalStudents());
// #3
console.log(classroomService.displayNames());
// #4 uncomment
//classroomService.deleteLast();
// #5
/* classroomService.deleteRandom();
classroomService.displayAllStudents();
 */
// #6
classroomService.displayFemales();

// #7
console.log(classroomService.displayNumberOfGender())

// #8
console.log(classroomService.allFemaleStudents())

// #9 
classroomService.displayYoungAdults()

// #10 add new student

// #11
classroomService.displayYoungestStudent()

// #12
classroomService.displayAverageAge(classroom.students)

// #13
classroomService.displayAverageAge(classroomService.filterFemales())
// #14

// #15
// classroomService.sortByName()

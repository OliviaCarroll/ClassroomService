import * as classroom from './classroom.js'
import ClassroomService from './ClassroomService.js'
import PrintService from './PrintService.js'

const printService = new PrintService()
const classroomService = new ClassroomService(printService, classroom.students)
// processStudents
console.log(classroomService.processStudents())

// #1
classroomService.displayAllStudents();
// #2
console.log(classroomService.totalStudents());
// #3
console.log(classroomService.displayNames());
// #4 uncomment
//classroomService.deleteLast();
// #5
classroomService.deleteRandom();
classroomService.displayAllStudents();

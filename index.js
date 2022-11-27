import * as classroom from './classroom.js'
import ClassroomService from './ClassroomService.js'
import PrintService from './PrintService.js'

const printService = new PrintService()
const classroomService = new ClassroomService(printService, classroom.students)

classroom.classroomManager(classroomService, printService);


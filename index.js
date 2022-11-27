import * as classroom from './classroom.js'
import ClassroomService from './ClassroomService.js'
import PrintService from './PrintService.js'
import GradesService from './GradesService.js'

const printService = new PrintService()
const classroomService = new ClassroomService(printService, classroom.students)
const gradesService = new GradesService(printService, classroom.students)

classroom.classroomManager(classroomService, printService, gradesService);


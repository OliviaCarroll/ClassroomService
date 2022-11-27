import {randomIntegerInRange} from './classroom.js'
class GradesService {
    constructor(printer, students) {
        this.printer = printer
        this.students = students
    }

    addNewGrade() {
        return this.students.forEach((student) => {
            student.examScores.push(randomIntegerInRange(0, 10))
        })
    }

    bestGradesSum() {
        
    }
}

export default GradesService
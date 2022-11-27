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
/*  SIMPLY RAN OUT OF TIME, TOO TIRED TO SEE WHERE IT GOES WRONG
    bestGradesSum() {
        let studentsSumGrades = []
        let sumOfGrades = 0
            this.students.forEach((student) => {
                if (student.examScores.length > 0) {
                sumOfGrades = student.examScores.reduce((a, b) => a + b, 0)
                studentsSumGrades.push({
                    name: student.name,
                    sumGrades: sumOfGrades
                    })
                }
            }
            );
        if (studentsSumGrades.length === 0) {
            this.printer.print('There are no students with grades registered')
        }
        studentsSumGrades.sort((a, b) => a.sumOfGrades - b.sumOfGrades)
        this.printer.print(studentsSumGrades[-1].name)
    }
 */
/*     bestAverageGrade() {
        let averageGrade = 0
    } 
*/
/* 
    addPointPerGrade() {
        this.students.forEach(student => {
            if (student.examScores == []) {
                student.examScores.push(10)
            }
            else ()
        })
    } */
}

export default GradesService
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

    sumOfAllGrades() {
        let studentGradesSum = []
        let sumOfGrades = 0
            this.students.forEach((student) => {
                if (student.examScores.length > 0) {
                sumOfGrades = student.examScores.reduce((a, b) => a + b, 0)
                studentGradesSum.push({
                    name: student.name,
                    totalGrade: sumOfGrades
                    })
                }
            });
        return studentGradesSum;
    }

    bestGradesSum() {
        let studentsTotalGrades = this.sumOfAllGrades();

        if (studentsTotalGrades.length === 0) {
            this.printer.print('There are no students with exam scores registered')
            return
        };
        studentsTotalGrades.sort((a, b) => a.totalGrade - b.totalGrade)
        this.printer.print(studentsTotalGrades.splice(-1));
    }

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
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
            sumOfGrades = student.examScores.reduce((a, b) => a + b, 0)
            studentGradesSum.push({
                name: student.name,
                totalGrade: sumOfGrades,
                numberOfGrades: student.examScores.length
                })
        });

        if (studentGradesSum.length === 0) {
            this.printer.printNoExamScores()
        };

        return studentGradesSum;
    }

    bestGradesSum() {
        let studentsTotalGrades = this.sumOfAllGrades();

        studentsTotalGrades.sort((a, b) => a.totalGrade - b.totalGrade)
        this.printer.print(studentsTotalGrades.splice(-1));
    }

    calculateAverages() {
        let averageGrade = 0
        let studentsTotalGrades = this.sumOfAllGrades();
        studentsTotalGrades.forEach(student => {
            if (student.numberOfGrades !== 0) {
                averageGrade = student.totalGrade / student.numberOfGrades
            }
            student.averageGrade = Math.round(averageGrade)
        });
        return studentsTotalGrades
    }

    bestAverageGrade() {
        let studentsGrades = this.calculateAverages();

        let sortedByAverage = studentsGrades.sort((a, b) => a.averageGrade - b.averageGrade)
        this.printer.print(sortedByAverage.splice(-1))
    } 

    addTenIfNoGrades() {
        this.students.forEach((student) => {
            if (student.examScores.length === 0) {
                student.examScores.push(10)
            }
        })
        return this.students
    }
/* 
    addPointPerGrade() {
        let students = this.addTenIfNoGrades()

        
        this.students.examScores.map((grade) => {
                if (examScores.grade !== 10) {
                    examScores.grade++;
                }
            }) 
    }
    this.printer.printTableOf(this.students)
    } */

}




export default GradesService
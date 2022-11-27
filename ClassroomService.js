import {randomIntegerInRange} from "./classroom.js";

class ClassroomService {
    constructor(printer, students){
        this.printer = printer
        this.students = students
    }

    processStudents(){
        for(var x = 0; x < this.students.length; x++){
            let student = this.students[x]
            return student;
        }
    }

    displayAllStudents(){
        this.printer.printTableOf(this.students);
    }

    totalStudents(){
        return this.students.length;
    }

    displayNames(){
        let allNames = [];
        this.students.forEach(student => {
            allNames.push(student.name)
        });
        return allNames;
    }

    deleteLast(){
        this.students.pop();
    }

    deleteRandom(){
        let randomIndex = arr => arr.splice((Math.random() * arr.length), 1)
        randomIndex(this.students);
    }

    filterFemales(){
        return this.students.filter(student => student.gender === 'female')
    }

    displayFemales(){
        return this.printer.printTableOf(this.filterFemales());
    }

    displayNumberOfGender(){
        let females = this.filterFemales();
        return `Females = ${females.length}, Males = ${this.students.length - females.length}`
    }

    allFemaleStudents(){
        return this.students.length === this.filterFemales().length
    }

    displayYoungAdults(){
        let youngAdults = this.students.filter(student => student.age >= 20 && student.age <= 25)
        return this.printer.printTableOf(youngAdults)
    }

/*     addNewStudent(){
        const newStudent = {
            age: randomIntegerInRange(), //function in classroom.js
            examScores: [],
            name: ,
            gender: 
        }
        this.students.append(newStudent)
    } */

    displayYoungestStudent(){
        let sortedByAge = 
            this.students.sort((a, b) => a.age - b.age);
        return this.printer.print(sortedByAge[0].name)
    }

    displayAverageAge(array){
        let averageAge = Math.round(array.reduce((a, b) => a + b.age, 0) / array.length)
        return this.printer.print(averageAge)
    }

    addNewGrade(){
        return this.students.forEach((student) => {
            student.examScores.push(randomIntegerInRange(0, 10))
        })
    }

    sortByName(){
        return this.printer.printTableOf(
            this.students.sort((a, b) => a.name.localeCompare(b.name))
            )
    }
}

export default ClassroomService
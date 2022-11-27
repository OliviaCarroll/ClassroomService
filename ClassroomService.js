import {randomIntegerInRange, availableFemaleNames, availableMaleNames, availableGenders} from "./classroom.js";

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
        this.printer.print(this.students.length);
    }

    displayNames(){
        let allNames = [];
        this.students.forEach(student => {
            allNames.push(student.name)
        });
        this.printer.print(allNames);
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
        this.printer.printTableOf(this.filterFemales());
    }

    displayNumberOfGender(){
        let females = this.filterFemales();
        this.printer.print(`Females = ${females.length}, Males = ${this.students.length - females.length}`)
    }

    allFemaleStudents(){
        this.printer.print(this.students.length === this.filterFemales().length)
    }

    displayYoungAdults(){
        let youngAdults = this.students.filter(student => student.age >= 20 && student.age <= 25)
        this.printer.printTableOf(youngAdults)
    }

    addNewStudent(){
        let gender = availableGenders[randomIntegerInRange(0, 1)]
        const newStudent = {
            age: randomIntegerInRange(20, 50), //function in classroom.js
            examScores: [],
            gender: gender,
            name: gender === 'female' ? availableFemaleNames[randomIntegerInRange(0, availableFemaleNames.length - 1)] : availableMaleNames[randomIntegerInRange(0, availableMaleNames.length - 1)]
        }
        this.students.push(newStudent)
    }

    displayYoungestStudent(){
        let sortedByAge = 
            this.students.sort((a, b) => a.age - b.age);
        this.printer.print(sortedByAge[0].name)
    }

    displayAverageAge(array){
        let averageAge = Math.round(array.reduce((a, b) => a + b.age, 0) / array.length)
        this.printer.print(averageAge)
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
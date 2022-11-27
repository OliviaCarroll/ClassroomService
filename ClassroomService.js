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
/*      return this.students; //is this needed? */
    }

    deleteRandom(){
        let randomIndex = arr => arr.splice((Math.random() * arr.length), 1)
        randomIndex(this.students);
    }

    // possible refactor for females?? Used twice,and could use in allFemaleStudents: if females = students.length then return true 

    displayFemales(){
        let females = this.students.filter(student => student.gender === 'female')
        return this.printer.printTableOf(females);
    }

    studentsByGender(){
        let females = this.students.filter(student => student.gender === 'female');
        return `Females = ${females.length}, Males = ${this.students.length - females.length}`
    }

    allFemaleStudents(){
        return this.students.every(student => student.gender === 'female')
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

    sortByName(){
        return this.printer.printTableOf(
            this.students.sort((a, b) => a.name.localeCompare(b.name))
            )
    }
}

export default ClassroomService
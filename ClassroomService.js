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
        const randomIndex = arr => arr.splice((Math.random() * arr.length), 1)
        randomIndex(this.students);
    }

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
}

// possible refactor for females?? Used twice,and could use in allFemaleStudents: if females = students.length then return true 


export default ClassroomService
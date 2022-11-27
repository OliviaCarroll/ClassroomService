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
        return this.students; //is this needed?
    }

    deleteRandom(){
        const randomIndex = arr => arr.splice((Math.random() * arr.length), 1)
        randomIndex(this.students);
    }

    displayFemales(){
        let females = this.students.filter(student => student.gender === 'female')
        return this.printer.printTableOf(females);
    }
}

export default ClassroomService
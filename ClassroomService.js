class ClassroomService {
    constructor(printer, students){
        this.printer = printer
        this.students = students
    }

    processStudents(){
        for(var x = 0; x < this.students.length; x++){
            console.table(this.students[x])
        }
    }

    displayAllStudents(){
        this.printer.printTableOf(this.students)
    }

    totalStudents(){
        this.printer.print(this.students.length)
    }


}

export default ClassroomService
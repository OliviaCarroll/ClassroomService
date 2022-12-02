import readline from "readline";
import options from './userOptions.js'

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
},
{
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
},
{
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'olivia'
}]
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female']; // could be enum 

function randomIntegerInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function classroomManager(classroomService, printService, gradesService){

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function getUserNumber() {
        return new Promise((resolve, reject) => {
            rl.question('Introduce a number from 1 to 18 to execute the action. Press 0 to exit: ', 
            function(userInput) {
                rl.pause();
                const parsedUserInput = parseInt(userInput);
                resolve(parsedUserInput);
            })
        });
    }

    let userNumber;
    
    do {
        console.log(options)
        userNumber = await getUserNumber();
        
        switch(userNumber) {
            case 1: 
                classroomService.displayAllStudents();
                break;
            case 2:
                classroomService.totalStudents();
                break;
            case 3:    // #3
                classroomService.displayNames();
                break;
            case 4:
                classroomService.deleteLast();
                break;
            case 5:
                classroomService.deleteRandom();
                break;
            case 6:
                classroomService.displayFemales();
                break;
            case 7:
                classroomService.displayNumberOfGender();
                break;
            case 8:    
                classroomService.allFemaleStudents();
                break;
            case 9:
                classroomService.displayYoungAdults();
                break;
            case 10:    
                classroomService.addNewStudent();
                classroomService.displayAllStudents();
                break;
            case 11:
                classroomService.displayYoungestStudent();
                break;
            case 12:
                classroomService.displayAverageAge(students);
                break;
            case 13:
                classroomService.displayAverageAge(classroomService.filterFemales());
                break;
            case 14:
                gradesService.addNewGrade();
                break;
            case 15:
                classroomService.sortByName();
                break;
            case 16:
                gradesService.bestGradesSum();
                break;
            case 19:
                console.log(gradesService.sumOfAllGrades())
                break
            default:
                console.log('Exiting application')
                break;
            }        
    }
    while (userNumber !== 0 && userNumber < 20)

    rl.close();
}

export { students, availableMaleNames, availableFemaleNames, availableGenders, readline, randomIntegerInRange, classroomManager}
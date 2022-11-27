import ClassroomService from "./ClassroomService";
import PrintService from "./PrintService";
import jest from 'jest';

// jest.mock("./PrintService.js")

// console.log(jest)

describe("ClassroomService should", () => {
    let students = [{
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
    }];
    const printService = new PrintService()
    let classroomService = new ClassroomService(printService, students)

/*  test("display students", () => {
        // needs mocked printService
        PrintService.mockImplementation(() => {
            return {
                printTableOf: (students) => {
                }
            }
        }) 
        const mockprintService = new PrintService()
        // when i call displayAllStudents, I expect PrintService.print to have been called one times
        const classroomService = new ClassroomService(mockprintService, students);
        classroomService.displayAllStudents()
        expect(() => mockprintService.printTableOf(students)).toBeCalledTimes(1)
    }); */
}); 


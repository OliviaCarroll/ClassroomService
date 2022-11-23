import ClassroomService from "./ClassroomService";
import PrintService from "./PrintService";
import jest from 'jest';

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

    test("display students", () => {
        // needs mocked printService
        let mockprintService = jest.fn(PrintService)
        // when i call displayAllStudents, I expect PrintService.print to have been called one times
        const classroomService = new ClassroomService(mockprintService, students);
        classroomService.displayAllStudents()
        expect(() => mockprintService.print()).toBeCalledTimes(1)
    });
});
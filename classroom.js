import readline from "readline";

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
    age: 28,
    examScores: [],
    gender: 'female',
    name: 'olivia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female']; // TODO change to enum

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export { students, availableMaleNames, availableFemaleNames, availableGenders, rl }
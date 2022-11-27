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
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'olivia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomIntegerInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export { students, availableMaleNames, availableFemaleNames, availableGenders, rl,randomIntegerInRange }
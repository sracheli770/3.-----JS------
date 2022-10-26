//higher order array methods:
const arr = [2, 4, 6, 8, 10];

//array methods that take a function as a param:

//forEach is an array method 
//forEach takes a callback func as a param
arr.forEach((e) => console.log(e));

//more array methods: 
arr.sort((a, b) => a - b); //compareFn (a, b) => a - b

//every: 
//every takes a predicate (func that returns a boolean)
//האם כל המספרים זוגיים
console.log(arr.every((n => n % 2 == 0)))//true/false
// האם כל המספרים חיוביים
console.log(arr.every((n => n % 2 > 0)))//true/false

//some: at least one element applies to the condition:
arr.some(n => n > 100) //at least one item is larger than 100


const numbers = [2, 4, 6, 8, 10];

//2 lines:
let filtered = numbers.filter((n => n > 6));//[8, 10];
console.log(filtered);

//fluent:
numbers
    .filter((n => n > 6))
    .forEach(n => console.log(n));


//find the index:  (-1 if not found)
let index = numbers.findIndex(n => n === 6); //2
console.log(index);

//reduce:

const numbers2 = [2, 4, 6, 8, 10];//
numbers2.reduce((sum, curr) => sum - curr, 100)//-30


const names = ['avi', 'dave', 'josh'];
//copy names to html array with divs
let html = names.map(n => `<div>${n}</div>`);


// let firstName = 'avi';
// let lastName = 'green';
// let age = 20;

let person1 = {
    firstName: 'avi',
    lastName: 'green',
    age: 20
}

let people = [
    {
        firstName: 'avi',
        lastName: 'green',
        age: 20
    },
    {
        firstName: 'dave',
        lastName: 'cook',
        age: 30
    }
];

//fill the html with people: 

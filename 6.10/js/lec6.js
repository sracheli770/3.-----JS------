const numbers = [1, 2, 3, 4, 5];

numbers.forEach(() => {
    console.log("Hello");
})

numbers.forEach((num, i) => {
    console.log(i, num);
})

numbers.sort((a, b) => { a - b })


const numberss = [10, 11, 30, 4, 5];
let even = numberss.filter((num) => num % 2 == 0)
console.log(even);


let names = ["avi", "john", "liat"];
//filter
//print the array
let ab = names.filter(name => name.length >= 4);
console.log(ab);

//print each string by herself
names.filter(n => n.length >= 4).forEach(n => console.log(n));


//always start with a const:
const arr = [4, 5, 6, 7, 8]; //ROM

//arr.push(7); lesgal with const

// arr = []; //illegal with const
//arr = arr.filter(()=>false) //illegal with const

//4+5+6+7+8
let sum = 0;
arr.forEach(e => sum += e);
console.log(sum);


let sum2 = arr.reduce((sum, num) => sum + num);
console.log(sum2);

let names2 = ["avi", "dave", "mira"];
let nameString = names2.reduce((string, next) => string + " " + next);
console.log(nameString);
//instead -string + " " + next- we can write `${string} ${next}`

//you get: only a string! reduce is caculating, so you can get both num&str
let s3 = names2.join(" ");
console.log("join: " + s3);

const arr2 = [10, 20, 30, 40, 50];
const s4 = arr2.reduce((s, curr) => s - curr, 0);
console.log(s4);


const arr3 = [1, 2, 3, 4, 5];
const mult = arr3.reduce((mult, next) => mult * next, 1);
console.log(mult);

const numbers2 = [10, 11, 30, 4, 5];
//array every- כל האיברים צריכים לעמוד בתנאי
console.log(numbers2.every(n => n >= 10));

//mini targil: 
let grades = [80, 40, 90, 100, 56, 70, -1];
//האם כל הציונים תקינים - כלומר בין 0 ל100
console.log("grades: " + grades.every(g => g >= 0 && g <= 100));

const arr5 = [1, 2, 3, 4, 5, 6];
//array some- לפחות איבר אחד שעומד בתנאי
console.log(arr5.some(n => n > 5));

//בדיקה האם יש לפחות ציון אחד שלא עומד בטווח
console.log(grades.some(g => g < 0 || g > 100));
console.log(grades.some(g => g < 0 || g > 100) ? "לפחות ציון אחד לא תקין" : "כל הציונים תקינים");


//find uses a predicate function that finds on element, it will return the element || undefined as true || false
const fruits = ["apple", "banana", "orange"];
console.log(fruits.find((fruit) => fruit === 'banana'));
/* console.log(fruits.find(function (fruit) {
    if (fruit === 'banana')
        return true;
    else
        return false;
})); //string | undefined */

//findIndex- return the index of the element 
const index = fruits.findIndex((fruit) => fruit === 'banana');
console.log(index);


//mini-targil
console.log("mini-targil:");
//1. at least one item is "banana"
console.log(fruits.some(f => f === 'banana')); //true
//2. index of banana
console.log(fruits.findIndex(f => f === 'banana')); //1
//3. are all the fruits lengths equal to 5?
console.log(fruits.every(f => f.length == 5)); //false
//4. at least one item that startsWith 'b'
console.log(fruits.some(f => f.startsWith('b'))); //true


const arr6 = [1, 2, 3, 4, 5];
//we want a new array from arr6
const arr7 = arr6.map(n => n * 2);
console.log(arr7);


const bands = ["Beatles", "Metallica", "Pink Floyd", "5FDP", "Marron 5"];

//given bands:
//we want:
//let html = ["<div><h2>Beatles</h2></div>", ...]
/* const bandsDiv = bands.map(b => `<div><h2>${b}</h2></div>`);
console.log(bandsDiv); */

let box = document.getElementById('box');
//loop thruogh all thd divs and then => box.inner HTML += div
/* bandsDiv.forEach(div => box.innerHTML += div) */

bands
    .map(b => `<div><h2>${b}</h2></div>`)
    .forEach(div => box.innerHTML += div)

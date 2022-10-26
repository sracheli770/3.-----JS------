function print(...words) {
    //inside the function words is an array
    words.forEach(w => console.log(w));
}

print('hi', 'hello', 'welcome');
print(['hi', 'hello', 'welcome'], 'hi');
print('hi', 'moe', '1', 8, 9);

const result = Math.min(3, 1, 0, 8);
console.log(result);

const max = Math.max(4, 8, 2, 8, 9, 1);
console.log(max);

console.log(Math.sqrt(2));

let arr = [1, 2, 100, 99, 3, 5, 8];
//find the smallest number in arr

let min = Math.min(...arr);
console.log(min);

function sum(x, y, z) {
    return x + y + z;
}

let arr0 = [1, 2, 4];
sum(...arr0) //same as sum(1, 2, 4)

let arr1 = [1, 2, 3];
let arr2 = [5, 7, 6];
let arr3 = [9, 7, 3];
//find the smallest and the largest

console.log(Math.min(...arr1, ...arr2, ...arr3));
console.log(Math.max(...arr1, ...arr2, ...arr3));

//another option
let joined = [...arr1, ...arr2, ...arr3];
console.log(joined);
console.log(Math.min(...joined));
console.log(Math.max(...joined));


let arr4 = [1, 2, 4, 56, 9, 23, 5, 6, 7, 8];
console.log(Math.min(...arr4));
console.log(Math.max(...arr4));
console.log(Math.min(...arr4.slice(0, 4)));
console.log(Math.max(...arr4.slice(-4))); //start from arr.length -4 to the end


function printLast4(arr) {
    /* while (arr.length > 4) { //כל עוד אורך המערך גדול מ-4:
        arr.shift(); //remove the first item 
    }
    console.log(arr); */
    //בצורה זו- המערך המקורי השתנה

    //don't change the original array:
    const copy = [...arr];
    while (copy.length > 4) {
        copy.shift();
    }
    console.log(copy);//[3, 1, 2, 3]
}

const numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3]
printLast4(numbers);
console.log(numbers);


//don't change the original array:
const copy = [...arr];
while (copy.length > 4) {
    copy.shift();
}
console.log(copy);//[3, 1, 2, 3]




const arr5 = [1, 2, 3]; //arr1 points to a memory address 0x00ff11
const arr6 = arr5; //   //arr2 points to a memory address 0x00ff11

const copy2 = [...arr5];//copy points to a new memory address 0x01dd12

//const x = arr1.splice(0, 3);

let numbers2 = [1, 10, 2, 4, 1, 0, -1];
//1. remove the first. 2. remove the last. 3. place 7 in index-4
let copyNums2 = [...numbers2];
copyNums2.splice(0, 1);
let copyNums3 = [...numbers2];
copyNums3.splice(-1, 1);
let copyNums4 = [...numbers2];
copyNums4.splice(4, 0, 7);

console.log(copyNums2);
console.log(copyNums3);
console.log(copyNums4);


//without splice:
console.log([...numbers2].slice(1));
console.log([...numbers2].slice(0, -1));
console.log(...numbers2.slice(0, 4), 7, ...numbers2.slice(5));

function printAllItemsFromFirst(arr) {
    console.log(arr.slice(1));//[10, 2, 4, 1, 0, -1]
}


const a = [1, 2, 3];
printAllItemsFromFirst(a);//[2, 3]
printAllItemsFromFirst(a);//[2, 3]
printAllItemsFromFirst(a);//[2, 3]
//print the same result because its 'pure function'



//array destucturing:

//given an array:
const arr7 = ['tomerbu', 'tomerbu@gmail.com', '0507123012'];

//we want a variable for userName
const userName2 = arr7[0];
//we want a variable for email
const email2 = arr7[1];
//we want a variable for phone
const phone2 = arr7[2];
//how do we do that?

const [userName, email, phone] = arr7;
console.log(userName);
console.log(email);
console.log(phone);

const [userName3, , phone3] = arr7;
//const userName = arr7[0];
//const phone = arr7[2];


//const [, , phone2] = arr7;
//const phone2 = arr7[2];

const [, email3,] = arr7;


let x = 1;
let y = 2;
console.log("Before: x = " + x + " y = " + y);
//we want x=2, y=1

/* let z = x; // z=1
x = y; // x=2
y = z; //y=1 */

//array destructuring:

/* let arr = [y, x]; //arr = new Array (y, x):
[x, y] = arr; */

[x, y] = [y, x];
console.log("After: x = " + x + " y = " + y);

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

let mercury2 = planets[0];
let earth2 = planets[1];
let rest2 = planets.slice(2);
console.log(mercury2);
console.log(earth2);
console.log(rest2);

const [mercury, earth, ...rest] = planets;
console.log(mercury);
console.log(earth);
console.log(rest);


const hero1 = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};


//copy hero1 and change the name to SpiderMan
const copy3 = { ...hero1 }
copy3.name = 'Spiderman';
console.log(copy3);

//copy hero1 and change the name to SpiderMan
const copy4 = { ...hero1, name: 'Spidreman' };
console.log(copy4);




const employee = {    // Object we want to destructure
    firstname: 'John',
    lastname: 'Snow',
    dateofbirth: '1990'
};

const copyE = { ...employee };
const { firstname, dateofbirth } = employee;
console.log(firstname + " " + dateofbirth);
const copyE2 = { ...employee, dateofbirth: '1992' };
console.log(copyE2);
const copyE3 = { ...employee, age: '25' };
console.log(copyE3);



//Primitive Type:
const number = 1;
let num2 = number; //primitives are copied
num2 = 8;
console.log(number);
console.log(num2);

//Object Type:
const hero = {
    name: 'Batman'
}
const muchacho = hero//Ojbect refer to same memory address
muchacho.name = 'muchacho';

console.log(muchacho);
console.log(hero);


/* function print(arr) {
    arr.sort();
    console.log(arr);
}

let arr9 = [1, 2, 20, 5, 34, 1];
print(arr9);
console.log(arr9); */


function add1(x) {
    x += 1;
    console.log(x);
}


let yy = 8;
add1(yy); //9
console.log(yy); //8



function add11(obj) {
    obj.age += 1;
    console.log(obj);
}

let person = { name: 'dave', age: 20 };
add11(person); //age: 21
console.log(person); //age:21

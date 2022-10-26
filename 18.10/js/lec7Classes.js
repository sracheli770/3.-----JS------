//object literals הגדרת אובייקטים בעזרת סינטקס
let s1 = {
    firstName: "Moe",
    lastName: "Green",
    age: 20
}
let s2 = {
    firstName: "Tsahi",
    lastName: "Cook",
    age: 22
}

//array of objects
let students = [
    {
        firstName: "Moe",
        lastName: "Green",
        age: 20
    },
    {
        firstName: "Tsahi",
        lastName: "Cook",
        age: 22
    }
]

//class template for Student object
class Students {
    constructor(firstName, lastName, age) /* props-רשימת התכונות */ {
        /* save the props: */
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}


//use the template:
const s3 = new Students("Moe", "Green", 20);
const s4 = new Students("Tzahi", "Doe", 22);

const StudentsArray = [
    new Students("Moe", "Green", 20),
    new Students("Tzahi", "Doe", 22)
]




//class for Drink
class Drink {
    constructor(name, color, calories, isSparkling) {
        this.name = name;// this- refers to the object. name is the parameter of the constcructor
        this.color = color;
        this.calories = calories;
        this.isSparkling = isSparkling;
    }
}


const drink1 = new Drink('Fanta', 'Orange', 42, true);
console.log(drink1.name);




class MyDate {
    //year, month, day
    constructor(year, month, day) {
        this.date = `${day}/${month}/${year}`
    }
}

const d2 = new MyDate(2022, 10, 18);
console.log(d2.date);

const d4 = new Date(); // a ready class- Date
console.log(d4);



class Pastry {
    constructor(name, color, bakingTime) {
        this.name = name;
        this.color = color;
        this.bakingTime = bakingTime;
    }
}

const pastries = [
    new Pastry('Croason', 'Brown', 20),
    new Pastry('VanilCake', 'Buige', 40),
    new Pastry('Rogalach', 'DarkBrown', 25)
];

pastries.forEach(p => console.log(p.name, p.color));

pastries.map(p => `<div>${p.name}</div>`)
    .forEach(p => box.innerHTML += p);
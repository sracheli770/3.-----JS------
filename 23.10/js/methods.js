//arrow function without a body(implict return)
const copyArray = (arr) => [...arr];
/* export const copy2 = (arr) => { return [...arr] };
export function copy3(arr) { return [...arr] }; */

//copy an object
//{} is the body
//({}) is a returned object
const copyObjectLonger = (obj) => { return { ...obj } }; //longer
const copyObject = (obj) => ({ ...obj }); //shorter- without return


//better readability
const minOfArray = (arr) => {
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    return [min, index];
}

//less readable (but works)
const minOfArray2 = (arr) => [Math.min(...arr), arr.indexOf(Math.min(...arr))];


//better readability
const maxOfArray = (arr) => {
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    return [max, index];
}



//return object
//better readability
const minOfArray3 = (arr) => {
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    //return {min: min, index: index};
    return { min, index };
}


function counter(arr = [9, 1, 2, 3, 3, 3, 4, 5, 9]) {//build an object with the props of arr

    //counter object: 
    const counterObj = {};
    arr.forEach(v => counterObj[v] = 0);
    //const obj = {9:0, 1:0, 2:0, 3:0};

    arr.forEach(v => {
        counterObj[v]++
        console.log();
    })
    //const obj = {9:1, 1:1, 2:1, 3:1};

    console.log(counterObj);
}

counter([1, 2, 3, 1, 2, 3, 4, 5, 6]);


const person = { name: 'dave' };
//person.name = 'moe';
person['name'] = 'moe'; //like counterObj[v]
person['lastname'] = 'green';
console.log(person);


function counter2(arr = [1, 1, 1, 23, 5, 5, 5, 6, 7]) {
    const counterObj = {};

    for (const v of arr) {
        counterObj[v] = 0; //pbj['prop']=0
    }

    for (const v of arr) {
        counterObj[v]++; //pbj['prop']=0
    }
    console.log(counterObj);
}

counter2();


//העתקת מערך לאובייקט
const arr2 = [3, 4, 5, 6];
//we want:
//const obj = { 3: '', 4: '', 5: '', 6: '' };

//the long way
/* const obj = {};
obj[3] = '';
obj[4] = '';
obj[5] = '';
obj[6] = ''; */

const obj = {};
for (const v of arr2) {
    obj[v] = '';
}
console.log(obj);


function counter2(arr = [1, 1, 1, 23, 5, 5, 5, 6, 7]) {
    //נעתיק את המערך לאובייקט חדש וריק:
    const counterObj = {};

    //בלולאה על כל איברי המערך- ניצור תכונה באובייקט
    //עם התכונה יהיה הערך הנוכחי במערך
    for (const v of arr) {
        counterObj[v] = 0;
    }

    for (const v of arr) {
        counterObj[v]++;
    }
    console.log(counterObj);
}
counter2();
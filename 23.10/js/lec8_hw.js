//צור מחלקה בשם request
//Request צור מחלקה בשם 
class Request {
    //props: אפשר לתת ערך התחלתי לפרופרטיס- בלי בנאי
    url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes';

    //constructors:
    constructor(url = this.url) {
        this.url = url;
    }

    //methods:
    send() {
        return `sending: ${this.url}`;
    }
}

//צור אובייקט מהמחלקה והצג אותו בקונסול
const r = new Request();
const s = r.send();
console.log(s); //regular prunt
console.log(r); //pretty print

const r2 = new Request("http://www.col.co.il");
console.log(r2);


class User {
    name = 'guest';
    lastname = 'doe';
    age = 24;
    constructor(name = this.name, lastname = this.lastname, age = this.age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}
console.log(new User);


class RestApi {
    endpoint;//string

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    put() {
        return `the endpoint is: ${this.endpoint}`;
    }
}

//צור אובייקט מהמחלקה והצג בקונסול את הערך המוחזר מהפעולה/מתודה  put
const rest = new RestApi('/movies');
console.log(rest.put()); //הצג בקונסול את הערך המוחזר מהמתודה


//task 3

//שיכיל מערך של מחרוזת תווים לבחירתך users הכרז על קבוע בשם 
const users = ['moe', 'dave', 'sam'];

//הכרז על קבוע בשם אימייל שיכיל גם הוא מערך של מחרוזות
const emails = ['moe@gmail.com', 'dave@gmail.com', 'sam@walla.co.il'];

//הכרז על קבוע בשם allData שיכיל את 2 המשתנים הקודמים, יש להשתמש באופרטור spread
const allData = [...users, ...emails];

//בעזרת forEach להציג את כל הערכים במערך allData
allData.forEach(a => console.log(a));


//task 4

const user = {
    id: '12345', name: 'joe', email: 'joe@gmail.com'
}
const address = {
    country: 'Israel', city: 'Tel Aviv', street: 'Ben Gurion St.'
}

const allUserData = {
    ...user, ...address
}
console.log(`${allUserData.name} lives in ${allUserData.city}`);
console.log(allUserData.name, allUserData.city);


//task 5
const fn = () => console.log('Hello World');
//check
fn();


//task 6
const counter = (str) => `str length is ${str.length}`;
//בדיקה
console.log(counter('abc'));

//task 7
//תזכורת לפילטר
const arr = [1, 2, 3, 4];
console.log(arr.filter(x => x % 2 === 0));

//the task
const smalls = (numbers) => numbers.filter(v => v < 10);
console.log(smalls([10, 2, 4, 5, 810, 8]));
const result = smalls([10, 2, 4, 5, 810, 8]);
console.log(result);

//task 8
const calc = (a, b) => (a.length + b.length) * 2;
const total = calc('a', 'b');
console.log(total);
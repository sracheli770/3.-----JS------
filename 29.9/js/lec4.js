let colorButton = document.getElementById('colorButton');
let boxx = document.getElementById('box');

for (let i = 1; i <= 100; i++) {
    console.log(`${i}`.padStart(3, '0'));
}

let str = "";
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        str += `${(i * j)}`.padEnd(2, ' ') + " ";
    }
    str += "\n";
}

console.log(str);


let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
console.log(letters);
let Email = 'lracheli@gmail.com';
let emailsplit = Email.split('@');
console.log(emailsplit);
console.log(emailsplit[0]);
console.log(emailsplit[1]);



//בדיקה האם כתובת מייל תקינה:
//1.  האורך שלה גדול מ-0
//2.  האינדקס של @ שונה ממינוס 1, זאת אומרת שהוא קיים
//3.  מכיל בסוף .com- את הסיומת של הג'מייל

function validateEmail(email) {
    if (email.length > 0 && email.indexOf('@') != -1 && email.endsWith('.com')) {
        return true;
    }
    else {
        return false;
    }
}

//אופציה נוספת יותר קצרה, יחזיר ביטוי בוליאני- אם הכל מתקיים- יחזיר נכון, אם אחד לא- לא נכון.
function validateEmail2(email) {
    return email.length > 0 && email.indexOf('@') != -1 && email.endsWith('.com');
}


const box = document.getElementById('box');
const btnSend = document.getElementById('btn-send');
const emailInput = document.getElementById('email');
const emailForm = document.getElementById('email-form');
const emailFeedback = document.getElementById('email-feedback');

btnSend.addEventListener('click', function () {
    //1.  get the email from the input (value)
    let email = emailInput.value;
    //2.  check that email is valid
    let isEmailValid = validateEmail(email)
    //3.  if email is VALID, send the form
    if (isEmailValid) {
        //send the form
        emailForm.submit();
    }
    //else- show message
    else {
        emailFeedback.classList.remove('hidden');
    }
})
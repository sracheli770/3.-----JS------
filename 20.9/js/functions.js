function sayHello(name = "Guest") {
    console.log("Hello, " + name);
}

function sayFullName(first, last) {
    console.log("Your Name Is: " + first + " " + last);
}

function randomNumber(min, max) {
    let r = min + Math.random() * (max - min);
    r = Math.round(r);
    console.log(r);
}

function add(x, y) {
    return x + y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function sub(x, y) {
    return x - y;
}

function wrapInDiv(text) {
    return '<div>' + text + '</div>';
}

function wrapInParagraph(text) {
    return '<p>' + text + '</p>';
}

function wrapInH1(text) {
    return '<h1>' + text + '</h1>';
}

/* let html = wrapInH1('Racheli');
html = wrapInDiv(html);
console.log(html);
document.write(html); */


//נרצה לכתוב פונקציה שמקבלת מערך ומחזירה את הסכום של האיברים

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/* let arr = [10, 20, 30];
let result = sum(arr);
console.log(result);

//השמה מחדש- למשתנה שכבר קיים
arr = [20, 30, 40];
result = sum(arr);
console.log(result);*/

function average(arr) {
    let s = sum(arr);
    return s / arr.length;
}

/* console.log(average([1, 2, 3, 4, 5])); */



function bmi(weight, height) {
    return weight / (height * height);
}

function bmiValue(weight, height) {
    let Bmi = bmi(weight, height);
    if (Bmi < 18.5) {
        return "Under Weight🍗";
    }
    else if (Bmi < 24.9) {
        return "Normal👑";
    }
    else if (Bmi < 29.9) {
        return "Over Weight🧁";
    }
    else if (Bmi < 34.9) {
        return "Obesity [class 1]🥐";
    }
    else if (Bmi < 39.9) {
        return "Over Obesity [class 2]🍔";
    }
    else {
        return "Extreme Obesity🍠";
    }
}
/* console.log("Your BMI is: " + bmi(60, 1.6) + ", You Are " + bmiValue(60, 1.6)); */
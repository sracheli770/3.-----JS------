let btn = document.getElementById('btn1');

btn.addEventListener('click', function () { alert('A') });
btn.addEventListener('click', () => { alert('B') });

//פונקצית חץ עם שם
/* let myFunc () => { } */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//כתיבה מלאה
arr.forEach(function (value) {
    console.log(value);
})
//כתיבה מקוצרת
arr.forEach((value) => {
    console.log(value);
})


let letters = ['a', 'b', 'z', 'e', 'i', 'j', 'c'];
letters.sort()//Sorts an array in place.
console.log(letters); //['a','b','c','e','i','j','z']

let numbers = [10, 1, 2, 5, 5, 9, 4];
//מערך ממויין
//numbers=[1,2,4,5,9,10];
numbers.sort((a, b) => a - b);
console.log(numbers);

//דרך ארוכה
numbers.sort(function (n1, n2) {
    if (n1 == n2) {
        return 0;
    }
    else if (n1 > n2) {
        return 1;
    }
    else {
        return -1;
    }
})

//דרך קצרה יותר
numbers.sort((n1, n2) => {
    return n1 - n2;
})
//אם כותבים סוגריים מסולסלים, צריך לכתוב גם return

//אפשר לוותר על הסוגריים מסולסלים ועל המילה רטורנ, יוצא:
numbers.sort((n1, n2) => n1 - n2);

//למיין בסדר יורד
numbers.sort((a, b) => b - a);

console.log(numbers);


//shuffle- לבלגן את המערך בצורה רנדומלית
console.log("Shuffle:");
numbers.sort((a, b) => {
    let r = Math.random();
    if (r > 0.5) {
        return 1
    } else {
        return -1;
    }
});

//shorter
numbers.sort((a, b) => Math.random() > 0.5 ? 1 : -1);

console.log(numbers);



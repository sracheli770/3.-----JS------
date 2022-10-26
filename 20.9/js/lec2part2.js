/* function demoScopes() {
    //local variable:
    let i = 1;
    //console.log(i);
}

function demoScopes2() {
    console.log(i);
    //local variable:
    //let i = 3;
    //console.log(i);
}

console.log(i); */

/* let bmiIndex = bmi(50, 1.5);
console.log("Your BMI Is: " + bmiIndex); */


//declare your elements (Get Elements By Id):
let box = document.getElementById('box');
let btn1 = document.getElementById('btn-targil1');
let btn2 = document.getElementById('btn-targil2');
let btn3 = document.getElementById('btn-bmi');
let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');

//addEventListener:
btn1.addEventListener('click', function () {
    box.innerHTML = 'Targil 1'
});

btn2.addEventListener('click', function () {
    box.innerHTML = 'Targil 2'
});

btn3.addEventListener('click', function () {
    let weight = weightInput.value;
    let height = heightInput.value;
    box.innerHTML = bmiValue(weight, height);
});

function numbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function index(arr) {
    arr.forEach(function (value, index, arr) {
        console.log("value: " + value);
        console.log("index: " + index);
        console.log("arr: " + arr);
    })
}

function fullName(fname, lname) {
    console.log(fname + " " + lname);
}

function randomNumber() {
    let r = 1 + Math.random() * 9;
    r = Math.round(r);
    console.log("The Random Number Is: " + r);
}

function randomColor(arr) {
    let r = Math.random() * 2;
    r = Math.round(r);
    console.log("The Random Color Is: " + arr[r]);;
}

let btnName = document.getElementById('btnName');
let Name = document.getElementById('name');
btnName.addEventListener('click', function () {
    let yourName = Name.value;
    alert("Hello " + yourName + "!");
});

function randomColor2(arr) {
    let r = Math.random() * 3;
    r = Math.round(r);
    console.log(arr[r]);
}

function min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("The Smallest Number Is: " + min);
}

function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("The Largest Number Is: " + max);
}


let x = [1, 2, 3, 4, 5, 6];
numbers(x);
index(x);
fullName("Racheli", "Sasonkin");
randomNumber();
let colors = ['Red', 'Green', 'Blue'];
randomColor(colors);
let colors2 = ['Red', 'Blue', 'Green', 'Yellow']
randomColor2(colors2);
min(x);
max(x);

function length(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("The Length Is: " + arr.length);
    }
    console.log(" ");
}

function numbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        number = arr[i];
        console.log("The " + i + "'s Number" + " Is " + number);
    }
    console.log(" ");
}

function min(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log("The Smallest Number Is: " + min);
    console.log(" ");
}

function max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("The Largest Number Is: " + max);
    console.log(" ");
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("The Sum Is: " + sum);
    console.log(" ");
    return sum;
}

function mult(arr) {
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        mult *= arr[i];
    }
    console.log("The Mult Is: " + mult);
    console.log(" ");
}

function average(arr) {
    let average = sum(arr) / arr.length;
    console.log("The Average Is: " + average);
}
function sumOfArr(arr) {
    //algorithm: given an array: calculate it's sum:
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum = " + sum);
}

function multOfArr(arr) {
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        mult *= arr[i];
    }
    console.log("Mult = " + mult);
}

function min(arr) {
    let m = arr[0];

    //loop over all items in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < m) {
            m = arr[i]
        }
    }

    console.log("The Smallest Item Is: " + m);
}

function max(arr) {
    let mx = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mx) {
            mx = arr[i]
        }
    }

    console.log("The Largest Item Is: " + mx);
}

function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        console.log(current);
    }
}

//פונקציה שמקבלת מערך של מספרים ומחזירה את האיבר הקטן ברשימה

/* function findMin(numbers) {
    return 0;
} */

//a shorter way to write
/* const findMin = (numbers) => 0; */
//another way
const findMin = (numbers) => {
    let min = numbers[0]; //assume that arr[0] is the smallest
    numbers.forEach(n => {
        if (n < min) {
            min = n;
        }
    })
    return min; //flag the end. return the final value
}

const min1 = (numbers) => {
    numbers.reduce((prev, current) => {
        if (current < prev) {
            prev = current;
        }
        return prev;
    })
}



const min2 = (numbers) => {
    return numbers.reduce((min, current) => {
        if (current < min) {
            min = current;
        }
        return min;
    })
}

const min3 = (numbers) => numbers.reduce((minNum, current) => minNum < current ? minNum : current)


let arr = [1, 2, 8, -400, -942, 40];
console.log(min3(arr));





//הצגת אלמנטים\מערך אלמנטים בדף הHTML
const list = document.getElementById('list');
let colors = [
    {
        color:
            "red"
        ,
        value:
            "#f00"
    }
    ,
    {
        color:
            "green"
        ,
        value:
            "#0f0"
    }
    ,
    {
        color:
            "blue"
        ,
        value:
            "#00f"
    }
    ,
    {
        color:
            "cyan"
        ,
        value:
            "#0ff"
    }
    ,
    {
        color:
            "magenta"
        ,
        value:
            "#f0f"
    }
    ,
    {
        color:
            "yellow"
        ,
        value:
            "#ff0"
    }
    ,
    {
        color:
            "black"
        ,
        value:
            "#000"
    }
];

colors.forEach(c =>
    list.innerHTML += `<li class="${c.color}" style="background:${c.value};">Color: ${c.color} - ${c.value}</li>`
)



const arr6 = [1, 2, 3, 4, 5];

//new array with all elements * 2
const newArr = arr6.map(value => value * 2);
console.log(newArr);



colors.map(o => `<li>${o.color}-${o.value}</li>`)
    .forEach(o => list.innerHTML += o)



    //in HTML- <div id="box"></div>    < ul id = "list" ></ >
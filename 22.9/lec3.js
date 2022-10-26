let arr = ["banana", "apple", "peach"];
//הדפיסו את כל איברי המערך
arr.forEach(function (value) {
    console.log("Fruit: " + value);
})
//הדפיסו לפני כל איבר את האינדקס
arr.forEach(function (value, index) {
    console.log("Index: " + index);
    console.log("Fruit: " + value);
})
//הדפיסו רק את האינדקס
arr.forEach(function (_, index) {
    console.log("Index: " + index);
})


function random(min, max) {
    let r = min + Math.random() * (max - min);
    r = Math.floor(r);
    return r;
}

console.log("The Random Number Is: " + random(0, 10));
let colors = ["red", "green", "blue"];
console.log("The random Color Is: " + colors[random(0, colors.length)]);



/* let cards2 = ["Jack", "Queen", "King", "Ace", "2"];

cards2.forEach(function (card) {
    /* box.innerHTML += '<p>' + c + '</p>'; */
/* box.innerHTML += `<p>${card}</p>`;
box.innerHTML += '<div class="card">' + ' <div class="card-body">' + card + '</div>' + '</div>' */
/* box.innerHTML +=
    `<div class="card w-25">
              <div class="card-body">
                 ${card}
              </div>
        </div>`
}) * / */



let box = document.getElementById('box');
let row = document.getElementById('row');
/*let images = [
         "images/7_of_diamonds.png",
        "images/8_of_diamonds.png",
        "images/9_of_diamonds.png",
        "images/10_of_diamonds.png" 
];*/

/* for (let i = 2; i <= 10; i++) {
    images.push(`images/${i}_of_diamonds.png`);
    images.push(`images/${i}_of_hearts.png`);
    images.push(`images/${i}_of_clubs.png`);
    images.push(`images/${i}_of_spades.png`);
} */

let images = [];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'ace', 'jack', 'king', 'queen'];
let suit = ['clubs', 'spades', 'diamonds', 'hearts'];

ranks.forEach(function (rank) {
    suit.forEach(function (suit) {
        images.push(`images/${rank}_of_${suit}.png`)
    })
})

for (let i = 0; i < images.length; i += 4) {
    box.innerHTML +=
        `<div class="row">
        <img class="col card shadow p-2 m-1" src="${images[i]}"></img>
        <img class="col card shadow p-2 m-1" src="${images[i + 1]}"></img>
        <img class="col card shadow p-2 m-1" src="${images[i + 2]}"></img>
        <img class="col card shadow p-2 m-1" src="${images[i + 3]}"></img>
    </div>`
}

//לא לפי עמודות ושורות
/* images.forEach(function (img) {
    box.innerHTML += `<img class="shadow border rounded w-25" src="${img}">`
}) */


/* ranks.forEach(function (rank) {
    images.push(`images/${rank}_of_diamonds.png`);
    images.push(`images/${rank}_of_hearts.png`);
    images.push(`images/${rank}_of_clubs.png`);
    images.push(`images/${rank}_of_spades.png`);
}) */



/* box.innerHTML +=
    `<div class="row">
        <img class="col card shadow p-2 m-1" src="images/3_of_diamonds.png"></img>
        <img class="col card shadow p-2 m-1" src="images/4_of_diamonds.png"></img>
        <img class="col card shadow p-2 m-1" src="images/5_of_diamonds.png"></img>
        <img class="col card shadow p-2 m-1" src="images/6_of_diamonds.png"></img>
    </div>
` */
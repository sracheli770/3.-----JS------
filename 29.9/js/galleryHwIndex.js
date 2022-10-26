const back = document.querySelector('#gallery div:nth-child(1)');
const image = document.querySelector('#gallery img');
const next = document.querySelector('#gallery div:nth-child(3)');

let images = [];
for (let i = 1; i <= 9; i++) {
    images.push(`images/pokemon/00${i}.png`)
}
images.sort((a, b) => Math.random() > 0.5 ? 1 : -1);//shuffle




let index = 0;
image.src = images[index];

back.addEventListener('click', () => {
    index -= 1;
    if (index < 0) {
        index = images.length - 1;
    }
    image.src = images[index];
})

next.addEventListener('click', () => {
    index += 1;
    if (index == images.length) {
        index = 0;
    }
    image.src = images[index];
})







//לבדוק למה לא עובד
/* let numbers = [1, 10, 2, 4, 1, 0, -1];

//elements are sorted in ascending, ASCII character order.
//1) ASCII
numbers.sort()
console.log("ASCII", numbers);

//ascending order:
numbers.sort((a, b) => a - b)
console.log("ascending", numbers);

//descending order:
numbers.sort((a, b) => b - a);
console.log("descending", numbers); */

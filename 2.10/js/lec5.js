let fruits = ["apple", "banana", "orange"];

//add mango at index=2
/* fruits.splice(2, 0, "mango"); */

//delete from index=1
/* fruits.splice(1, 1); */

//replace orange with watermelon
fruits.splice(2, 1, "watermaelon");
console.log(fruits);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//delete 3 elements from index=0
numbers.splice(0, 3);

//clear the array
numbers = [];

console.log(numbers);

let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');//26 elements
/* let slice = letters.slice(10); *///16 remaining letters
/* console.log(slice); */

//write from index=2
letters.slice(2).forEach(letters => console.log(letters));
/* console.log(letters);

for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
} */

//write from index=0 until index=10
letters.slice(0, 10).forEach(letter => console.log(letter))

//delete the last index
letters.slice(0, -1).forEach(letter => console.log(letter))
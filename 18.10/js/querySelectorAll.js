const box = document.getElementById('box');
const names = ["dave", "moe", "josh"];

names.forEach(name => (box.innerHTML += `<h3 class="w-50 mx-auto m-3 btn card text-center">${name}</h3>`));


//listen to click events on #names > h3
let theNames = document.querySelectorAll('#box h3');
console.log(theNames);
theNames.forEach(n => n.addEventListener('click', (e) => {
    alert(e.target.innerHTML)
}))


//how go we find all the h3 elements?
const h3 = document.querySelectorAll('#wrapper h3');
console.log(h3);
//respond to click events on h3 elements
h3.forEach(v => v.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
}))
//alert with the innerHTML of the h3 elements
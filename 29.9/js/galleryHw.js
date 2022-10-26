const back = document.querySelector('#gallery > div:nth-child(1)');
const next = document.querySelector('#gallery > div:nth-child(3)');
const image = document.querySelector('#gallery > img');

let images = ["images/pokemon/003.png", "images/pokemon/004.png", "images/pokemon/005.png", "images/pokemon/006.png"];
let index = 0;

back.addEventListener('click', function () {
    index -= 1;
    if (index < 0) {
        index = images.length - 1
    }
    image.src = images[index];
})

next.addEventListener('click', function () {
    index += 1;
    if (index > images.length - 1) {
        index = 0;
    }
    image.src = images[index];
})

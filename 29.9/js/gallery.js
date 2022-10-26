//find the img tag inside the #gallery
const galleryImage = document.querySelector('#gallery img');
const backButton = document.querySelector('#gallery div:nth-child(1)');
const nextButton = document.querySelector('#gallery div:nth-child(3)');


let images = ["images/img_lights.jpg", "images/img_mountains.jpg", "images/img_nature.jpg", "images/img_snow.jpg"];
let index = 0;

nextButton.addEventListener('click', function () {
    //next-> index=index+1
    index += 1;
    //לחזור לתמונה הראשונה
    if (index == images.length) {
        index = 0;
    }
    galleryImage.src = images[index];
})

backButton.addEventListener('click', function () {
    index -= 1;
    //לחזור לתמונה האחרונה
    if (index == -1) {
        index = images.length - 1;
    }
    galleryImage.src = images[index];
})
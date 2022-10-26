//synchronized code:
console.log("start");

//async code:
setTimeout(() => {
    console.log('a Second Passed');
}, 1000);

//synchronized code:
console.log('Done');


const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const box = document.getElementById('box');

//store the intervalID
let interval;

//handle clicks:
//start
btnStart.addEventListener('click', () => {
    //store the intervalID
    interval = setInterval(() => {
        box.innerHTML = new Date();
    }, 1000);
});

//stop
btnStop.addEventListener('click', () => {
    //stop interval(takes the id as a param)
    clearInterval(interval);
});



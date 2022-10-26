const btnStart = document.getElementById('start');
const box = document.getElementById('box');

let intervalId;
let timeOutId;
let remainingTime;

btnStart.addEventListener('click', () => {
    clearInterval(intervalId);
    clearTimeout(timeOutId);

    remainingTime = 60;

    box.innerHTML = remainingTime + ' Remaining';
    //setInterval 1 sec
    intervalId = setInterval(() => {
        remainingTime--;
        box.innerHTML = remainingTime + ' Remaining';
    }, 1000);
    //kill the interval after 60 seconds
    setTimeout(() => {
        box.innerHTML = 'Time is up';
        clearInterval(intervalId);
    }, 1000 * 60);
});


 git config--global user.email "lracheli789@.com"
  git config--global user.name "sracheli770"
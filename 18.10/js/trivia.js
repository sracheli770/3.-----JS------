const trivia = document.getElementById('trivia');

const questions = [
    { question: "1+1=?", answer: "2", choices: ["2", "11", "0", "10"] },
    { question: "2+2=?", answer: "4", choices: ["2", "22", "4", "0"] },
    { question: "2+1=?", answer: "3", choices: ["21", "2", "1", "3"] }
];

//show the first question
let index = 0;
let score = 0;

function showQuestion() {
    trivia.innerHTML = `
<h2 class="text-center">${questions[index].question}</h2>
<button class="w-50 mx-auto m-3 btn btn-primary">${questions[index].choices[0]}</button>
<button class="w-50 mx-auto m-3 btn btn-primary">${questions[index].choices[1]}</button>
<button class="w-50 mx-auto m-3 btn btn-primary">${questions[index].choices[2]}</button>
<button class="w-50 mx-auto m-3 btn btn-primary">${questions[index].choices[3]}</button>
`

    //find all the buttons inside #trivia and respond to click events on the buttons

    document.querySelectorAll('#trivia button')
        .forEach(b => b.addEventListener('click', (e) => {
            /* alert(e.target.innerHTML === questions[index].answer ? 'Correct' : 'Wrong'); */
            if (e.target.innerHTML === questions[index].answer) {
                alert('Correct');
                score += 10;
            }
            else {
                alert('Wrong');
            }
            //show the next question
            index += 1;
            if (index === questions.length) {
                alert(`Game Over- Your Score: ${score}`);
                /* trivia.innerHTML = `Game Over- Your Score: ${score}`; */
            } else {
                showQuestion();
            }
        }))
}

//כפתור- התחל משחק
showQuestion();


const restart = document.getElementById('restart');
restart.addEventListener('click', () => {
    //index, score, showQuestion
    index = 0;
    score = 0;
    showQuestion();
})

//לחזור לבערך 9:18-9:20 לבדוק מה זה היה
/* document.querySelectorAll('#trivia > button').forEach(e => {
    //if (e != e.target) {
    e.style.background = 'red';
    //}
    //e.target.style.background = 'blue';
}) */



















/*const btn1 = document.querySelector('#trivia > button:nth-child(2)')
btn1.addEventListener('click', () => { alert("btn1 clicked") });
const btn2 = document.querySelector('#trivia > button:nth-child(3)')
btn2.addEventListener('click', () => { alert("btn2 clicked") });
const btn3 = document.querySelector('#trivia > button:nth-child(4)')
btn3.addEventListener('click', () => { alert("btn3 clicked") });
const btn4 = document.querySelector('#trivia > button:nth-child(5)')
btn4.addEventListener('click', () => { alert("btn4 clicked") }); 


a shorter way:
const buttons = document.querySelectorAll('#trivia .btn')
buttons.forEach(btn => btn.addEventListener('click', (event) => {
    console.log(event.target); //the element that was clicked
    console.log(event.target.innerHTML); //the innerHTML of the element that was clicked
}
)); */



/* //save data permenently:
//let y = 10; stored in memory
localStorage.setItem('x', 30); //saved in disk (SSD, HARDDRIVE)
//x is saved as a string
//x is updated


//read a value:
const result = localStorage.getItem('x');
console.log(result); //string / undefined

const add = result + 7;
console.log(add); //string: 307 */
//localStorage.clear();

//localStorage.removeItem('x'); delete only x




const btn = document.getElementById('prefered-mode');

const current = localStorage.getItem('preferedmode'); //string/null
if (current === null) {
    localStorage.setItem('preferedmode', 'light');
}

//when the page loads: update the button
btn.innerHTML = localStorage.getItem('preferedmode') === 'light' ? 'Dark Mode' : 'Light Mode';


btn.addEventListener('click', () => {
    //read the current mode
    /*     let mode = localStorage.getItem('preferedmode'); */
    //toggle the mode

    //a long way
    /* if (mode === 'light') {
        localStorage.setItem('preferedmode', 'dark');
    }
    else {
        localStorage.setItem('preferedmode', 'light');
    } */

    //a shorter way
    /* (mode === 'light') ? localStorage.setItem('preferedmode', 'dark') : localStorage.setItem('preferedmode', 'light'); */

    //a shorter way
    /* localStorage.setItem('preferedmode', mode === 'light' ? 'dark' : 'light'); */


    //update the mode variable
    //mode = localStorage.getItem('preferedmode');



    //a better way
    let mode = localStorage.getItem('preferedmode') === 'light' ? 'dark' : 'light';
    //save the new mode:
    localStorage.setItem('preferedmode', mode);

    //reflect the state to the user:
    btn.innerHTML = mode === 'light' ? 'Dark Mode' : 'Light Mode';

    //change css //bady class list
    const body = document.body;
    if (mode === 'light') {
        body.classList.remove('dark-mode')
    }
    else {
        body.classList.add('dark-mode')
    }
});
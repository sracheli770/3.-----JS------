const modeBtn = document.getElementById('prefered-mode');

function savePreferdMode(mode = 'light') {
    localStorage.setItem('preferedmode', mode);
}

function flip(mode) {
    return mode === 'light' ? 'dark' : 'light';
}

function modeButtonTitle(mode) {
    return mode === 'light' ? 'Light Mode' : 'Dark Mode';
}

//פונקצית חץ
/* const modeButtonTitle2 = (mode) => mode === 'light' ? 'Light Mode' : 'Dark Mode'; */

function currentMode() {
    return localStorage.getItem('preferedmode');
}

/* function updaeBodyClassList2() {
    const mode = currentMode();

    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    }
    else {
        document.body.classList.remove('dark-mode');
    }
} */

function updateBodyClassList() {
    currentMode() === 'dark'
        ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode');
}

function toggleButtonText() {
    let mode = flip(currentMode());
    //נעדכן את הכותרת של הכפתור
    const buttonTitle = modeButtonTitle(mode);
    modeBtn.innerHTML = buttonTitle;
}

//בטעינת המסמך נרצה לעדכן את ה-body.classList
updateBodyClassList();
//בטעינת המסמך נרצה לעדכן את כותרת הכפתור
toggleButtonText();

//react to cutton clicks:
modeBtn.addEventListener('click', () => {
    //נבדוק מה שמור באחסון
    const mode = currentMode();
    //נרצה לשנות mode
    const newMode = flip(mode);
    //נשמור את המוד החדש באחסון
    savePreferdMode(newMode);
    //נעדכן את הbody.class
    //לפי מה ששמרנו באחסון
    updateBodyClassList();
    //נרצה לעדכן את כותרת הכפתור
    toggleButtonText();
})


const phoneCorrect = document.querySelector('.size');
const phoneWrong = document.querySelector('.wrong');
const validationCheck = document.querySelector('.validation-check');
validationCheck.addEventListener('input',(e)=> {
    if(e.currentTarget.value.length > 8){
        phoneCorrect.classList.remove('mydisplay');
        phoneWrong.classList.add('mydisplay');
        e.currentTarget.style.outLine = 'red';
    }
    else if (e.currentTarget.value.length == 0) {
        phoneCorrect.classList.add('mydisplay');
        phoneWrong.classList.add('mydisplay');
    }
    else {
        phoneCorrect.classList.add("mydisplay");
        phoneWrong.classList.remove("mydisplay");
    }
})

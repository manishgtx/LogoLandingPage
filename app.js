const phoneCorrect = document.querySelector(".phone-size");
const phoneWrong = document.querySelector(".phone-wrong");
const validationCheck = document.querySelector(".validation-check");
const nameValidationCheck = document.querySelector(".name-check");
const emailValidationCheck = document.querySelector(".email-check");
// name
const nameCorrect = document.querySelector(".name-size");
const nameWrong = document.querySelector(".name-wrong");
// email
const emailCorrect = document.querySelector('.email-size');
const emailWrong = document.querySelector('.email-wrong');
validationCheck.addEventListener("input", (e) => {
  if (e.currentTarget.value.length > 8) {
    phoneCorrect.classList.remove("mydisplay");
    phoneWrong.classList.add("mydisplay");
  } else if (e.currentTarget.value.length == 0) {
    phoneCorrect.classList.add("mydisplay");
    phoneWrong.classList.add("mydisplay");
  } else {
    phoneCorrect.classList.add("mydisplay");
    phoneWrong.classList.remove("mydisplay");
  }
});

nameValidationCheck.addEventListener("input", (e) => {
  if (e.currentTarget.value.length > 8) {
    nameCorrect.classList.remove("mydisplay");
    nameWrong.classList.add("mydisplay");
  } else if (e.currentTarget.value.length == 0) {
    nameCorrect.classList.add("mydisplay");
    nameWrong.classList.add("mydisplay");
  } else {
    nameCorrect.classList.add("mydisplay");
    nameWrong.classList.remove("mydisplay");
  }
});
emailValidationCheck.addEventListener("input", (e) => {
  if (e.currentTarget.value.length > 8 ) {
    emailCorrect.classList.remove("mydisplay");
    emailWrong.classList.add("mydisplay");
  } else if (e.currentTarget.value.length == 0) {
    emailCorrect.classList.add("mydisplay");
    nameWrong.classList.add("mydisplay");
  } else {
    emailCorrect.classList.add("mydisplay");
    emailWrong.classList.remove("mydisplay");
  }
});

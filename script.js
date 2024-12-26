document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();


let isValid = true;

const emailInput = document.getElementById('email');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailError = document.getElementById('email-error');

if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email";
    emailInput.style.border = "1px solid red";
    isValid = false;
} else {
    emailError.textContent = "";
    emailInput.style.border = "";
    emailInput.style.border = "";
    window.location.href = 'index2.html'
}


});


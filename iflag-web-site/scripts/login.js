let userEmail = document.getElementById('email');
let userPassword = document.getElementById('password');
let form = document.querySelector('form');
let emailText = document.getElementById('emailText');
let passwordText = document.getElementById('passwordText');
let formText = document.getElementById('formText');

form.addEventListener("submit", (e) => {
    if (userEmail.value == '' && userPassword.value == '') {
        formText.style.color = '#fff'
        formText.style.fontSize = '1em'
        formText.textContent = 'Preencha todos os campos para logar.'
    } else if (
        emailValidate(userEmail.value) === true &&
        passwordValidate(userPassword.value) === true
    ) {
        emailText.textContent = '';
        passwordText.textContent = '';
        alert("Sucesso! Você será redirecionado para a página inicial!");
        location.href = "../index.html"
    }
    e.preventDefault();
});

userEmail.addEventListener('keyup', () => {
    if (emailValidate(userEmail.value) !== true) {
        emailText.textContent = 'O e-mail deve ser; Ex: abc@abc.com'
    } else {
        emailText.textContent = '';
    }
});

userPassword.addEventListener('keyup', () => {
    if (passwordValidate(userPassword.value) !== true) {
        passwordText.textContent =
            "A senha dever ter no mínimo seis caracteres, um caractere especial, um número, uma letra maiúscula e uma letra minúscula."
    } else {
        passwordText.textContent = '';
    }
});

function emailValidate(userEmail) {
    let patternEmail =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return patternEmail.test(userEmail);
}

function passwordValidate(userPassword) {
    let patternPassword =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return patternPassword.test(userPassword);
}


























































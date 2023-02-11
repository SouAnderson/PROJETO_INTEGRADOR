
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userPassword = document.getElementById('password');
let userPhone = document.getElementById('userPhone');
let form = document.querySelector("form");
let nameText = document.getElementById('nameText');
let emailText = document.getElementById('emailText');
let passwordText = document.getElementById('passwordText');
let phoneText = document.getElementById('phoneText');
let formText = document.getElementById('formText');

form.addEventListener("submit", (e) => {
    if (userName.value == '' && userEmail.value == '' && userPassword.value == '' && userPhone.value == '') {
        formText.style.color = '#fff'
        formText.style.fontSize = '0.9em'
        formText.textContent = 'Preencha todos os campos para se cadastrar.'
    } else if (
        nameValidate(userName.value) === true &&
        emailValidate(userEmail.value) === true &&
        passwordValidate(userPassword.value) === true &&
        phoneValidate(userPhone.value) === true
    ) {

        nameText.textContent = '';
        emailText.textContent = '';
        passwordText.textContent = '';
        phoneText.textContent = '';

        alert("Sucesso! Você será redirecionado para a página de Login!");
        location.href = "/pages/login.html"
    }
    e.preventDefault();
})

userName.addEventListener('keyup', () => {
    if (nameValidate(userName.value) !== true) {
        nameText.textContent = 'Nome inválido.'
    } else {
        nameText.textContent = '';
    }
})

userEmail.addEventListener('keyup', () => {
    if (emailValidate(userEmail.value) !== true) {
        emailText.textContent = 'O e-mail deve ser; Ex: abc@abc.com'
    } else {
        emailText.textContent = '';
    }
})

userPassword.addEventListener('keyup', () => {
    if (passwordValidate(userPassword.value) !== true) {
        passwordText.textContent =
            "A senha dever ter no mínimo seis caracteres, um caractere especial, um número, uma letra maiscúla e uma letra minúscula."
    } else {
        passwordText.textContent = '';
    }
})

userPhone.addEventListener('keyup', () => {
    if (phoneValidate(userPhone.value) !== true) {
        phoneText.textContent = 'Telefone inválido.'
    } else {
        phoneText.textContent = '';
    }
})

function nameValidate(userName) {
    let patternName = /^[A-Z][a-z]* [A-Z][a-z]*$/;
    return patternName.test(userName)
}

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

function phoneValidate(userPhone) {
    let patternPhone =
        /^\([0-9]{2}\) 9 [0-9]{4}[-][0-9]{4}$/;
    return patternPhone.test(userPhone);
}



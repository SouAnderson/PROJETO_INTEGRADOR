function 
 validate() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (email.value.length <= 10 || email.value == "") {
      alert("E-mail não informado.");
      email.focus();
      return;
    }
    if (password.value.length <= 5 || password.value == "") {
      alert("Senha não informada. A senha deve ter mais do que 5 carateres.");
      password.focus();
      return;
    }

    alert("Sucesso! Você será redirecionado para a página inicial!");
    location.href = "/pages/home.html"
    return false;
  }


 
















/*
 if (login == 'dracula@.com' && password === 'dracula') {
alert('SUCCESSFULLY!')
}*/
/*if(login.value.lenght <= 10) {
    alert('INFORME O SEU EMAIL! .')
}*/
/*if(password === '' ||password <= 5) {
    alert('Perencha todos os campos para logar.')
}*/
/*else
{
alert('Dados incorretos, tente novamente.')
}*/
    // Reset the text of an element in a form with id="myForm"
/*function myResetFunction() {
    document.getElementById("myForm").reset();
}*/
 //}






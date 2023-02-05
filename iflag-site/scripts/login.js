function 
 validate() {

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var phone = document.getElementById("phone");
    
    if (name.value == "" || name.value.length <= 2) {
      alert("Nome não informado. Preencha todos os campos para se cadastrar.");
      name.focus();
      return;
    }
    if (email.value == "" ||  email.value.length <= 10 || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      alert("E-mail inválido.");
      email.focus();
      return;
    }
    if (password.value.length <= 5 || password.value == "") {
      alert("Senha não informada. A senha deve ter mais do que 5 carateres.");
      password.focus();
      return;
    }
    if (phone.value.length <= 11  || phone.value == "") {
      alert("Telefone não informado. Insira o DDD e o número do seu telefone.");
      phone.focus();
      return;
    }
    alert("Sucesso! Você será redirecionado para a página de Login!");
    location.href = "/pages/login.html"
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






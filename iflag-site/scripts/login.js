function 
 validate() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "" || email.value.length <= 10 || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
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




















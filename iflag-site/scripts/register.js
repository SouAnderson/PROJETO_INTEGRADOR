
 function 
 validate() {

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var phone = document.getElementById("phone");
    
    if (name.value.length <= 2 || name.value == "") {
      alert("Nome não informado. Preencha todos os campos para se cadastrar.");
      name.focus();
      return;
    }
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
    if (phone.value.length <= 11  || phone.value == "") {
      alert("Telefone não informado. Insira o DDD e o número do seu telefone.");
      phone.focus();
      return;
    }
    alert("Sucesso! Você será redirecionado para a página de Login!");
    location.href = "/pages/login.html"
    return false;
  }
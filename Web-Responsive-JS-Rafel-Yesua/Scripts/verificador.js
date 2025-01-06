// Verificador formulario

function verificador(){
  var user = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("numero").value;

  if (user == null || user.length == 0 || !(/^[a-zA-Z0-9]{4,}/.test(user))){
    alert("El nombre debe tener como minimo 4 caracteres (combinación de numericos y letras mayusculas y minsuculas)");
    return false;
  }

  else if (!(/^\w+@+\w+.[a-zA-Z]{2,4}$/.test(email))){ 
    alert("El email no es valido");
    return false;
  }
  else if(!(/^[0-9]{9}$/.test(tel))){
    alert("El teléfono debe tener 9 caracteres numericos");
    return false;
  }

  else {
    alert("Muchas gracias por ponerte en contacto con nosotros pronto nos pondremos en contacto con usted "+user);
    return true;
  }
}


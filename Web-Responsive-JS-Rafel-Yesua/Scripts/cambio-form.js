// Funcionalidad botón pasar de Mario a Luigi

var formLuigi = document.getElementsByClassName("active-luigi")[0];
var form = document.getElementsByClassName("formulario")[0];
var buttonNav = document.getElementsByClassName("slider")[0];
var personaje = document.getElementsByClassName("mario")[0];

buttonNav.addEventListener('click', marioLuigi); // "addEventListener" se queda "escuchando" esperando un click, cuando lo recibe, hace la función
  
function marioLuigi(){
  form.classList.toggle('active-luigi');
  personaje.classList.toggle('active-luigi');
}

// Funcionalidad botón pasar de Mario a Luigi móvil

var buttonNavMovil = document.getElementById("slider-movil");

buttonNavMovil.addEventListener('click', marioLuigiMovil);
  
function marioLuigiMovil(){
  form.classList.toggle('active-luigi');
  personaje.classList.toggle('active-luigi');
}
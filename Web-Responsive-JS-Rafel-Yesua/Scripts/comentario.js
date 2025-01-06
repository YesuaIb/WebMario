function AgregarComentarios() {
  // Obtiene los valores del nombre y el comentario
  var nombre = document.getElementById("nombre2").value;
  var comentario = document.getElementById("comentario").value;
  var ancho = window.matchMedia("(max-width: 426px)");
   
  // Verifica si ambos campos tienen valores
  if (nombre && comentario) {
    if(ancho.matches){
      confirmacion = confirm("¿El mensaje es correcto? "+ comentario);
      if(confirmacion){
        alert("Enviado, muchas gracias");
      }else{
        var CommNew = prompt("Introduce el nuevo mensaje");
        while(CommNew == "" || CommNew == null){
          CommNew = prompt("El mensaje no puede estar vacio");
        }
          NuevoMensaje(CommNew);
      }
    }else{
        // Crea un nuevo elemento div para el comentario
        var commentSection = document.getElementById("comment-section");
        var commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = "<p><strong>" + nombre + ":</strong> <br>" + comentario+"</p>";
        
        // Agrega el comentario a la sección de comentarios
        commentSection.innerHTML += commentDiv.outerHTML;

    } 
    }else {
      // Muestra una alerta si uno de los campos está vacío
      alert("Por favor, completa ambos campos.");
  }

  //Recursividad de la solicitud
  function NuevoMensaje (a){
    var correcto = confirm("¿El mensaje es correcto? "+ a)
    if(correcto){
      alert("Enviado, muchas gracias");
    }
    else{
      CommNew = prompt("Introduce el nuevo mensaje");
      while(CommNew == "" || CommNew == null){
        CommNew = prompt("El mensaje no puede estar vacio");
      }
        NuevoMensaje(CommNew);
    }
  }
}
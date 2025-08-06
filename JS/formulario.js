console.log("JS cargado correctamente");
document.addEventListener("DOMContentLoaded", function(){
const enviar = document.getElementById("enviar");

  enviar.addEventListener('click', function (e) {
    e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value.trim();
  

  if (nombre==="" || correo==="" || telefono==="" || asunto==="" || mensaje==="" ) {
    alert("No se permiten campos vacios");
    return;
  }
  alert("! Formulario enviado !")
});
});
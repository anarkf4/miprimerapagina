alert("Hola este es mi Javascript");
/*let nombre = "Angel"
var nombre1 = "Angel F"
const nombre2 = "Angel F2"

console.log(nombre);
console.log(nombre1);
console.log(nombre2);*/
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    alert("ENVIADO");
    formulario.submit();    
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});


/*
let contenidoTitulo = "Nombre";

//Seleccionar elementos
let titulo = document.querySelector(".textof__texto")
titulo.innerHTML = contenidoTitulo;

//Condicionales

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro";
}
else {
    console.log("no se cumple");
}

const nombre = prompt('cual es tu nombre')

function validacionNombre() {
let nombreC = nombre.toUpperCase();
if (nombreC == "VICTOR") {
document.querySelector('h1').innerHTML = `tu verdadero nombre es ${nombre}`
}
}*/
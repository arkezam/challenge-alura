function encriptar(s) {
  var decrypt = ["e", "i", "a", "o", "u"];
  var encrypt = ["enter", "imes", "ai", "ober", "ufat"];

  for (let i = 0; i < s.length + decrypt.length; i++) {
    s = s.replaceAll(decrypt[i], encrypt[i]);
  }
  cambiarRes(s);
}

function desencriptar(s) {
  var decrypt = ["e", "i", "a", "o", "u"];
  var encrypt = ["enter", "imes", "ai", "ober", "ufat"];

  for (let i = 0; i < s.length + encrypt.length; i++) {
    s = s.replaceAll(encrypt[i], decrypt[i]);
  }
  cambiarRes(s);
}

function cambiarRes(cadena) {
  var cambiar = document.getElementById("resultado");
  cambiar.setAttribute("class", "resultadoc");
  cambiar.innerHTML = "";

  var cambiartext = document.getElementById("textres");
  cambiartext.innerHTML = cadena;

  var botoncpy = document.getElementById("btn-cpy");
  botoncpy.style.display = "block";
}


function esMayuscula(cadena) {
  var tieneMayusculas = false;
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] == " " || cadena[i] == "!" || cadena[i] == "?") {
      i++;
    }
   else if (cadena[i].toUpperCase() == cadena[i]) {
      tieneMayusculas = true;
      break;
    }
  }
  return tieneMayusculas;
}
function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

var btnenc = document.getElementById("btn-enc");
var botonPulsado = false;
var btndec = document.getElementById("btn-dec");
var texto = document.getElementById("caja-texto");

btnenc.addEventListener("click", function () {
  botonPulsado = true;
  if (esMayuscula(texto.value)) {
    alert("El texto ingresado es invalido o contiene mayusculas");
  } else {
    encriptar(texto.value);
  }
});

btndec.addEventListener("click", function () {
  desencriptar(texto.value);
});

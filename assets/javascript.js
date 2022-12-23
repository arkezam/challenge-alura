function encriptar(s) {
  var decrypt = ["e", "i", "a", "o", "u"];
  var encrypt = ["enter", "imes", "ai", "ober", "ufat"];

  for (let i = 0; i < s.length; i++) {
    s = s.replaceAll(decrypt[i], encrypt[i]);
  }

  var cambiar = document.getElementById("resultado");
  cambiar.setAttribute("class", "resultadoc");
  cambiar.innerHTML = "";

  var cambiartext = document.getElementById("textres");
  cambiartext.innerHTML = s;
  var botoncpy = document.getElementById("btn-cpy");
  botoncpy.style.display = "block";
}

function desencriptar(s) {
  var decrypt = ["e", "i", "a", "o", "u"];
  var encrypt = ["enter", "imes", "ai", "ober", "ufat"];

  for (let i = 0; i < s.length; i++) {
    s = s.replaceAll(encrypt[i], decrypt[i]);
  }

  var cambiar = document.getElementById("resultado");
  cambiar.setAttribute("class", "resultadoc");

 
  var cambiartext = document.getElementById("textres");
  cambiartext.innerHTML = s;
}

var texto = document.getElementById("caja-texto");

var botonPulsado = false;

function esMayuscula(cadena) {
  var tieneMayusculas = false;
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i].toUpperCase() === cadena[i]) {
      tieneMayusculas = true;
      break;
    }
  }
  return tieneMayusculas;
}

var btnenc = document.getElementById("btn-enc");

btnenc.addEventListener("click", function () {
  botonPulsado = true;

  if (esMayuscula(texto.value) == true || texto.value == "") {
    alert("El texto ingresado es invalido o contiene mayusculas");
  } else {
    encriptar(texto.value);
  }
});

var btndec = document.getElementById("btn-dec");

btndec.addEventListener("click", function () {
 
 
    desencriptar(texto.value);
 
});

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

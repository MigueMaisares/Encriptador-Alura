const llaves = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };
const llavesInverse = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };
var copiar = document.getElementById("copiar");

function encriptar(clase) {
  clase == "boton-encriptar" ? cifrado(llaves) : cifrado(llavesInverse);
}

function cifrado(llave) {
  let texto = document.getElementById("textArea").value;
  let vacio = document.getElementById("vacio");
  let copiarTexto = document.getElementById("copiarTexto");
  const regex = /^[a-z ]*$/;

  if (regex.test(texto) && texto != "") {
    Object.keys(llave).map((key) => {
      texto = texto.replaceAll(key, llave[key]);
    });
    copiarTexto.value = texto;
    vacio.style.display = "none";
    copiar.style.display = "flex";
  }
}

function limpiarTexto(tag) {
  if (tag.value == "") {
    vacio.style.display = "flex";
    copiar.style.display = "none";
  }
}

function copy() {
  let copy = document.getElementById("copiarTexto");
  navigator.clipboard.writeText(copy.value);
}

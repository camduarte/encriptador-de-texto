// FIXME: Agregar función anonima para evitar variables y funciones globales.

/**
 * Encripta el texto.
 * @returns El texto encriptado.
 */
function encriptar() {
    const texto = document.querySelector(".entrada").value;

    //Llaves de encriptación
    var llaves = new Map();
    llaves.set("e","enter");
    llaves.set("i","imes");
    llaves.set("a","ai");
    llaves.set("o","ober");
    llaves.set("u","ufat");

    var resultado = texto.replace(/a/g, llaves.get("a"))
    resultado = resultado.replace(/e/g, llaves.get("e"))
    resultado = resultado.replace(/i/g, llaves.get("i"))
    resultado = resultado.replace(/o/g, llaves.get("o"))
    resultado = resultado.replace(/u/g, llaves.get("u"));

    // muestro el mensaje encriptado
    const salida = document.querySelector(".salida");
    salida.value = resultado;
}

var  botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.onclick = encriptar;

/**
 * Desecripta el texto.
 * @returns El texto desencriptado.
 */
 function desencriptar() {
    const texto = document.querySelector(".entrada").value;
    
    //Llaves de desencriptación
    var llaves = new Map();
    llaves.set("enter","e");
    llaves.set("imes","i");
    llaves.set("ai","a");
    llaves.set("ober","o");
    llaves.set("ufat","u");

    var resultado = texto.replace(/enter/g, llaves.get("enter"))
    resultado = resultado.replace(/imes/g, llaves.get("imes"))
    resultado = resultado.replace(/ai/g, llaves.get("ai"))
    resultado = resultado.replace(/ober/g, llaves.get("ober"))
    resultado = resultado.replace(/ufat/g, llaves.get("ufat"));

    // muestro el mensaje desencriptado
    const salida = document.querySelector(".salida");
    salida.value = resultado;
}

var  botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.onclick = desencriptar;
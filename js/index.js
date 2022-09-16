// FIXME: Agregar función anonima para evitar variables y funciones globales.

/**
 * Muestra la caja para el mensaje encriptado/desencriptado.
 */
function mostrarSalida() {
    var caja2 = document.querySelector(".caja2");
    var contenido = "<textarea class=\"salida\" placeholder=\"Salida\" readonly=\"true\" disabled></textarea><input id=\"boton-copiar\" type=\"button\" value=\"Copiar\">";
    caja2.innerHTML = contenido;
    //Copiar en el clipboard.
    var botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.onclick = copiar;
}

/**
 * Encripta el texto.
 * @returns El texto encriptado.
 */ 
function encriptar() {
    if (validarMensaje()) {
        const texto = document.querySelector(".entrada").value;

        //Llaves de encriptación.
        var llaves = new Map();
        llaves.set("e","enter");
        llaves.set("i","imes");
        llaves.set("a","ai");
        llaves.set("o","ober");
        llaves.set("u","ufat");
    
        //Encripto el mensaje.
        var resultado = texto.replace(/a/g, llaves.get("a"))
        resultado = resultado.replace(/e/g, llaves.get("e"))
        resultado = resultado.replace(/i/g, llaves.get("i"))
        resultado = resultado.replace(/o/g, llaves.get("o"))
        resultado = resultado.replace(/u/g, llaves.get("u"));
    
        //Muestro el mensaje encriptado.
        mostrarSalida();
        const salida = document.querySelector(".salida");
        salida.value = resultado;        
    } else {
        limpiarSalida();
        alert("Solo letras minúsculas y sin acentos");   
    }
}

var  botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.onclick = encriptar;

/**
 * Desencripta el texto.
 * @returns El texto desencriptado.
 */
 function desencriptar() {
    const texto = document.querySelector(".entrada").value;
    
    //Llaves de desencriptación.
    var llaves = new Map();
    llaves.set("enter","e");
    llaves.set("imes","i");
    llaves.set("ai","a");
    llaves.set("ober","o");
    llaves.set("ufat","u");

    //Desencripto el mensaje.
    var resultado = texto.replace(/enter/g, llaves.get("enter"))
    resultado = resultado.replace(/imes/g, llaves.get("imes"))
    resultado = resultado.replace(/ai/g, llaves.get("ai"))
    resultado = resultado.replace(/ober/g, llaves.get("ober"))
    resultado = resultado.replace(/ufat/g, llaves.get("ufat"));

    //Muestro el mensaje desencriptado.
    mostrarSalida();
    const salida = document.querySelector(".salida");
    salida.value = resultado;
}

var  botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.onclick = desencriptar;

/**
 * Copia el texto encriptado/desencriptado en el clipboard.
 */
function copiar() {
    var salida = document.querySelector(".salida");
    navigator.clipboard.writeText(salida.value);
}

/**
 * Valida que el texto solo sea letras minúsculas.
 * Valida que no sean letras con tildes.
 * Valida que no sean caracteres especiales.
 * 
 * @return true si son caracteres validos.
 */
function validarMensaje() {
    let mensaje = document.querySelector(".entrada").value;
    // Busca coincidencia con cualquier caracter que no sea de a-b y espacio.
    const expReg = /[^a-z\s]/g;
    let esValido = !expReg.test(mensaje);
    return esValido;
}

/**
 *  Limpia la caja de salida.
 */
function limpiarSalida() {
    let salida = document.querySelector(".salida");
    // Verifica que exista el elemento.
    if(salida != null) {
        salida.value = "";
    }
}
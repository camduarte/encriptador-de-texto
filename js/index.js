// FIXME: Agregar función anonima para evitar variables y funciones globales.

/**
 * Muestra la caja para el mensaje encriptado/desencriptado.
 */
function mostrarSalida() {
    const mostrar = "mostrar";
    const ocultar = "ocultar";

    let salida = document.getElementById("salida");
    // si el espacio de msj encriptado esta oculto lo hago visible.
    if(salida.className === ocultar) {
        let mensaje = document.getElementById("mensaje");
        mensaje.className = "ocultar"
        salida.className = "mostrar";        
    }
    //Copiar en el clipboard.
    let botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.onclick = copiar;
}

/**
 * Encripta el texto.
 */ 
function encriptar() {
    if (validarMensaje()) {
        let texto = document.querySelector(".entrada").value;

        //Llaves de encriptación.
        var llaves = new Map();
        llaves.set("e","enter");
        llaves.set("i","imes");
        llaves.set("a","ai");
        llaves.set("o","ober");
        llaves.set("u","ufat");
    
        //Encripto el mensaje.
        let resultado = texto.replace(/a/g, llaves.get("a"))
        resultado = resultado.replace(/e/g, llaves.get("e"))
        resultado = resultado.replace(/i/g, llaves.get("i"))
        resultado = resultado.replace(/o/g, llaves.get("o"))
        resultado = resultado.replace(/u/g, llaves.get("u"));
    
        //Muestro el mensaje encriptado.
        mostrarSalida();
        let salida = document.querySelector(".salida");
        salida.value = resultado;        
    } else {
        // Muestro mensaje al usuario.
        let mostrar = "mostrar";
        let ocultar = "ocultar";
        let salida = document.getElementById("salida");
        // Si el espacio de msj encriptado es visible, entonces lo oculto.
        if (salida.className === mostrar) {
            salida.className = ocultar;

            let mensaje = document.getElementById("mensaje");
            mensaje.className = mostrar;
        }
        alert("Solo letras minúsculas y sin acentos");   
    }
}

/**
 * Desencripta el texto.
 */
 function desencriptar() {
    const texto = document.querySelector(".entrada").value;
    
    //Llaves de desencriptación.
    let llaves = new Map();
    llaves.set("enter","e");
    llaves.set("imes","i");
    llaves.set("ai","a");
    llaves.set("ober","o");
    llaves.set("ufat","u");

    //Desencripto el mensaje.
    let resultado = texto.replace(/enter/g, llaves.get("enter"))
    resultado = resultado.replace(/imes/g, llaves.get("imes"))
    resultado = resultado.replace(/ai/g, llaves.get("ai"))
    resultado = resultado.replace(/ober/g, llaves.get("ober"))
    resultado = resultado.replace(/ufat/g, llaves.get("ufat"));

    //Muestro el mensaje desencriptado.
    mostrarSalida();
    const salida = document.querySelector(".salida");
    salida.value = resultado;
}

/**
 * Copia el texto encriptado/desencriptado en el clipboard.
 */
function copiar() {
    let salida = document.querySelector(".salida");
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

var  botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.onclick = encriptar;

var  botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.onclick = desencriptar;
(function() {
    /**
     * Muestra la caja para el mensaje encriptado/desencriptado.
     */
    function mostrarSalida() {
        const mostrarFondo = "img-background";
        const ocultarFondo = "white-background";
        const show = "show";
        const hide = "hide";

        const cajaSalida = document.querySelector(".output"); 
        const btnCopiar = document.querySelector(".output__copy");
        
        // si el espacio de msj encriptado esta oculto lo hago visible.
        if (cajaSalida.classList.contains(mostrarFondo)) {
            cajaSalida.classList.remove(mostrarFondo);
            cajaSalida.classList.add(ocultarFondo);

            btnCopiar.classList.remove(hide);
            btnCopiar.classList.add(show);
        }
    }

    /**
     * Encripta el texto.
     */ 
    function encriptar() {
        if (validarMensaje()) {
            let texto = document.querySelector(".input__msg").value;

            //Llaves de encriptación.
            const llaves = new Map();
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
            let salida = document.querySelector(".output__msg");
            salida.value = resultado;        
        } else {
            // Muestro mensaje al usuario.
            let mostrar = "show";
            let ocultar = "hide";
            let salida = document.querySelector(".output");
            // Si el espacio de msj encriptado es visible, entonces lo oculto.
            if (salida.className === mostrar) {
                salida.className = ocultar;

                let mensaje = document.getElementById("mensaje");
                mensaje.className = mostrar;
            }
            alert("Solo letras minúsculas y sin acentos.");   
        }
    }

    /**
     * Desencripta el texto.
     */
    function desencriptar() {
        const texto = document.querySelector(".input__msg").value;
        
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
        const salida = document.querySelector(".output__msg");
        salida.value = resultado;
    }

    /**
     * Copia el texto encriptado/desencriptado en el clipboard.
     */
    function copiar() {
        let salida = document.querySelector(".output__msg");
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
        let mensaje = document.querySelector(".input__msg").value;
        // Busca coincidencia con cualquier caracter que no sea de a-b y espacio.
        const expReg = /[^a-z\s]/g;
        let esValido = !expReg.test(mensaje);
        return esValido;
    }

    const botonEncriptar = document.querySelector(".controls__encrypt");
    botonEncriptar.onclick = encriptar;

    const botonDesencriptar = document.querySelector(".controls__decrypt");
    botonDesencriptar.onclick = desencriptar;

    //Copiar en el clipboard.
    const btnCopiar = document.querySelector(".output__copy");
    btnCopiar.onclick = copiar;
})();
function encriptar(){
    var frase = document.getElementById("texto").value.toLowerCase();
    //en frase seleccionamos el campo del texto a encriptar, agarramos
    //valor y lo transformamos a minusculas
    
    //i = es para tomar mayusculas y minusculas
    //g = tome en cuenta toda la linea o la oracion
    //m = tome en cuenta multiples lineas

    var textoEncriptado = frase.replace(/e/img, "enter");//remplazamos de manera concatenada
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("input").innerHTML = textoEncriptado;//remplazamos texto del id ninumensaje al encryptado anteriormente
    document.getElementById("muñeco").style.display = "none"; //desaparecemos elementos cuando le pica a encryptar
    document.getElementById("ingresatexto").style.display = "none";

    //Mostramos boton copiar cuando se llama a esta funcion
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar(){
    var frase = document.getElementById("texto").value.toLowerCase();
    //en frase seleccionamos el campo del texto a encriptar, agarramos
    //valor y lo transformamos a minusculas
    
    //i = es para tomar mayusculas y minusculas
    //g = tome en cuenta toda la linea o la oracion
    //m = tome en cuenta multiples lineas

    var textoEncriptado = frase.replace(/enter/img, "e");//remplazamos de manera concatenada
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    document.getElementById("input").innerHTML = textoEncriptado;
}

function copiar(){
     let copyText = document.querySelector("#input");//seleccionamos el campo donde esta contenido el texto
     copyText.select();//seleccionamos el contenido de ese campo
     document.execCommand("copy");//copiamos el texto
}
let letras=["a", "e", "i", "o", "u"];
let cambioDeLaVocal=["ai", "enter", "imes", "ober", "ufat"];
let textoInput="";
let nuevoTexto="";


function tomarTextoInput(params) {
    textoInput=document.getElementById("texto").value;
    /*Coloque aqui el valor del input text ya que al declarlo al principio me daba un valor null*/   
}

function encriptar() {  
    tomarTextoInput();

    for (let i = 0; i < textoInput.length; i++) {
        nuevoTexto=nuevoTexto+textoInput[i];
        for (let i2 = 0; i2 < letras.length; i2++) {
            if (textoInput[i]==letras[i2]) {
                nuevoTexto=nuevoTexto.substring(0, nuevoTexto.length -1);
                nuevoTexto=nuevoTexto+cambioDeLaVocal[i2]
            }
            
        }
        
    }
    document.getElementById("texto").value=nuevoTexto;
    textoInput="";
    nuevoTexto="";
}

function desencriptar() {
    tomarTextoInput();

    for (let i = 0; i < letras.length; i++) {
        textoInput=textoInput.replaceAll(cambioDeLaVocal[i], letras[i]);  
    }
    document.getElementById("texto").value=textoInput;
    textoInput="";

}

async function copiarTexto() {
    tomarTextoInput();
    try {
      await navigator.clipboard.writeText(textoInput);
      console.log('Contenido copiado al portapapeles');
      /* Resuelto - texto copiado al portapapeles con éxito */
    } catch (err) {
      console.error('Error al copiar: ', err);
      /* Rechazado - fallo al copiar el texto al portapapeles */
    }
}

let letras=["a", "e", "i", "o", "u"]
let cambioDeLaVocal=["ai", "enter", "imes", "ober", "ufat"]
let textoInput=""
let nuevoTexto=""


function encriptar() {  
    if (textoInput=="") {
        /*Coloque aqui el valor del input text ya que al declarlo al principio me daba un valor null*/
        textoInput=document.getElementById("texto").value;
    }
    for (let i = 0; i < textoInput.length; i++) {
        nuevoTexto=nuevoTexto+textoInput[i];
        for (let i2 = 0; i2 < letras.length; i2++) {
            if (textoInput[i]==letras[i2]) {
                nuevoTexto=nuevoTexto.substring(0, nuevoTexto.length -1);
                nuevoTexto=nuevoTexto+cambioDeLaVocal[i2]
            }
            
        }
        
    }
    textoInput=""
    console.log(nuevoTexto);
    nuevoTexto=""
}

function desencriptar() {
    if (textoInput=="") {
        /*Coloque aqui el valor del input text ya que al declarlo al principio me daba un valor null*/
        textoInput=document.getElementById("texto").value;
    }

    for (let i = 0; i < letras.length; i++) {
        textoInput=textoInput.replaceAll(cambioDeLaVocal[i], letras[i]);  
    }
    console.log(textoInput);
    textoInput=""
}










    


    /*let textoConvertido=textoInput.replaceAll("a", "ai");
    let textoConvertido2=textoConvertido.replaceAll("e", "enter");
    let textoConvertido3=textoConvertido2.replaceAll("i", "imes");
    let textoConvertido4=textoConvertido3.replaceAll("o", "ober");
    let textoConvertido5=textoConvertido4.replaceAll("u", "ufat");
    console.log(textoConvertido5);*/

function encriptar() {
    const textoInput=document.getElementById("padrasto").value;
    let textoConvertido=textoInput.replaceAll("a", "ai");
    let textoConvertido2=textoConvertido.replaceAll("e", "enter");
    let textoConvertido3=textoConvertido2.replaceAll("i", "imes");
    let textoConvertido4=textoConvertido3.replaceAll("o", "ober");
    let textoConvertido5=textoConvertido4.replaceAll("u", "ufat");
    console.log(textoConvertido5);
}
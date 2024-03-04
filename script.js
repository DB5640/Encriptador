const campoTexto = document.querySelector("#campo-texto")
console.log(campoTexto);
const mensaje = document.querySelector("#campo-mensaje")
console.log(mensaje);
const botonCopiar = document.getElementById("btnCopiar")

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

const copiar = () => {
    text = mensaje.value
    navigator.clipboard.writeText(text)
    console.log(botonCopiar);
    botonCopiar.innerHTML = "Copiado! ✔"
}

const desencriptar = () => {
    let texto = campoTexto.value.toLowerCase();
            console.log("Texto en minusculas: ", texto);
    if (validateText(texto)) {
        alert("El texto no puede contener números ni carácteres especiales");
        return;
    } else {
        console.log("Entro al else de validateText")
            for (let i = 0; i < matriz_code.length; i++) {
                texto = texto.replaceAll(matriz_code[i][1], matriz_code[i][0]);
            }
            
            mensaje.innerHTML = texto;
            campoTexto.value = "";
        botonCopiar.innerHTML = "Copiar"
    }
}


    const encriptar = () => {
            let texto = campoTexto.value.toLowerCase();
            console.log("Texto en minusculas: ", texto);
        if (validateText(texto)) {
            alert("El texto no puede contener números ni carácteres especiales");
            return;
        } else {
            console.log("Entro al else de validateText")
            for (let i = 0; i < matriz_code.length; i++) {
           texto = texto.replaceAll(matriz_code[i][0], matriz_code[i][1]);
            }
            console.log(`texto luego de la encriptacion:  ${texto}`);
            mensaje.innerHTML = texto;
            campoTexto.value = "";
            botonCopiar.innerHTML = "Copiar"
        }

    }

function validateText(texto) {
    var regex = /^[1-9A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    console.log(`regex.test(texto) = ${regex.test(texto)}`);
    return regex.test(texto);
    }








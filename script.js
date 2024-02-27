const campoTexto = document.querySelector("#campo-texto")
console.log(campoTexto);
const mensaje = document.querySelector("#campo-mensaje")
console.log(mensaje);

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

const desencriptar = () => {
    let resultado = "";
    console.log("Entré a la función desencriptar");
    let textoEncriptado = campoTexto.value;
    console.log("Texto encriptado: ", textoEncriptado);
    let i = 0;
    while (i < textoEncriptado.length) {
        let encontrado = false;
        for (let j = 0; !encontrado && j < matriz_code.length; j++) {
            if (textoEncriptado.substring(i).startsWith(matriz_code[j][1])) {
                resultado += matriz_code[j][0];
                encontrado = true;
                i += matriz_code[j][1].length;
            }
        }
        if (!encontrado) {
            resultado += textoEncriptado[i];
            i++;
        }
    }
    console.log("Texto desencriptado: ", resultado);
    mensaje.innerHTML = resultado;
    return resultado;
}


    const encriptar = () => {
        let resultado = "";
            console.log("Entre a la funcion encriptar");
            let texto = campoTexto.value;
            for (let i = 0; i < texto.length; i++) {
                if (/[aeiou]/gi.test(texto[i])) {
                    let encontrado = false;
                    for (let j = 0; !encontrado && j < matriz_code.length; j++) {
                        if (matriz_code[j][0] === texto[i]) {
                            resultado += matriz_code[j][1];
                            encontrado = true;
                        }
                    }
    
                } else {
                    resultado += texto[i];
                }
            }
            mensaje.innerHTML = resultado;
    }








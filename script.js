console.log("Hola Mundo");
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
var botonEncriptar = document.querySelector("#btnEncriptar");
//TODO: agregar el eventListener para el boton 
/* // Agregar un event listener para el evento de clic
botonEncriptar.addEventListener("click", function() {
    console.log("Has pulsado el boton");
    let resultado = "";
        console.log("Has pulsado la tecla Enter");
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

}); */


document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let resultado = "";
        console.log("Has pulsado la tecla Enter");
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
});






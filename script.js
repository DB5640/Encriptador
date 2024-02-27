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




document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        encriptar()
    }
});






//1
let animales = ["Mamifero", "Ave", "Reptil", "Anfibio"];
let colores = ["rojo", "verde", "azul"];

console.log(animales[1] + " " + colores[1]);
console.log(animales.length + " " + colores.length);
animales.push("Murciano");
console.log(animales);
colores.unshift("amarillo");
console.log(colores);


//2
function matrizAleatoria() {

    let matriz = [];

    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10);
        }
    }

    return matriz
}

const matriz = matrizAleatoria();
console.log(matriz);




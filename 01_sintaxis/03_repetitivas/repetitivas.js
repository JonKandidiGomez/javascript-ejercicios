//1
let contador = 20;
let i = 0;

while (i < contador) {
    console.log("Vuelta: " + i);
    i++;
}

//2
//let frase = prompt("Introduce tu frase");

let frase = "";
while (frase.length < 30) {
    frase += ".";
}

console.log(frase);

//3
let suma = 20;
let resultado = 0;
while (suma < 50) {
    resultado += suma;
    suma++;
}

console.log(resultado);


//4

for (let j = 1; j < 21; j++) {
    if(j % 2 === 0) {
        console.log(j)
    }
}

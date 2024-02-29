console.log("Parte 1")

let animales = ["Mamifero", "Inertebrado", "Anfibio", "Reptil"];
let colores = ["Azul", "Purpura", "Negro"];

console.log(animales[1])
console.log(colores[1])

console.log(animales.length)
console.log(colores.length)

function anadirFinal(lista, elemento) {
    lista.push(elemento)
}

anadirFinal(animales, "Felino")
console.log(animales)

function anadirPrincipio(lista, elemento) {
    lista.unshift(elemento);
}

anadirPrincipio(colores, "Rojo")
console.log(colores)

animales.forEach(elemento => {
        console.log(elemento)
    }
)
colores.forEach(elemento => {
        console.log(elemento)
    }
)
console.log("Parte 2")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function matriz10() {
    let matriz = [];
    for (let i = 0; i < 10; i++) {
        let fila = [];
        for (let j = 0; j < 10; j++) {
            fila.push(getRndInteger(0, 99));
        }
        matriz.push(fila);
    }
    return matriz;
}

function mostrarMatriz(matriz) {
    matriz.forEach(fila => {
        let mostrar = "   ";
        for (let elemento of fila) {
            mostrar += (elemento < 10) ? (" " + elemento + " ") : (elemento + " ");
        }
        console.log(mostrar + "\n");
    })
}

let miMatriz = matriz10();
mostrarMatriz(miMatriz);



function fparte1(cadena1, cadena2) {
    alert(cadena1 + cadena2);
}

function esPar(numero) {
    alert((numero % 2 === 0) ? "Es par" : "Es impar");
}

function saludar(nombre = "anónimo") {
    alert(`Hola, ${nombre}`)
}

function sumarConInteres(cant1, cant2) {
    let suma = cant1 + cant2;
    return suma + ((suma <= 10) ? 1 : 2);
}

/*
console.log("Parte 1");
fparte1("Hola", " y adios.");


console.log("Parte 2");
esPar(3);
esPar(4);

console.log("Parte 3");
saludar("Aritz");
saludar();

console.log("Parte 4");
console.log(sumarConInteres(5, 3));
console.log(sumarConInteres(7, 9));

 */


console.log("Parte 5");


let fibonacci = function (n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }

}

let factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }

}

function generarSerie(inicio, final, funcion) {
    for (let i = inicio; i <= final; i++) {
        console.log(funcion(i));
    }
}

let duplicar = (n) => {
    return n * 2
}

// tambien funcionaria si hubieramos guardado las funciones de manera normal
// o se podría definir justo al llamar a la funcion
generarSerie(1, 10, factorial);
generarSerie(1, 10, fibonacci);
generarSerie(1, 10, duplicar);
generarSerie(1, 10, (n) => {
    return n * 2
});
generarSerie(1, 10, (n) => n * 2);





//1
/*function sumarStrings(cadena1, cadena2) {
    return cadena1 + cadena2
}

console.log(sumarStrings("Hola, ", "Mundo"))


//2

function esPar(numero) {
    let result;

    if (numero % 2 === 0) {
        result = numero + " es par";
    } else {
        result = numero + " es impar";
    }

    return result;
}

console.log(esPar(5))


//3

function saludar(nombre = "anónimo"){
    return "Hola, " + nombre
}

console.log(saludar("Jon"))
console.log(saludar())


// 4

function sumarConInteres(cant1, cant2) {
    let result = cant1 + cant2
    if (result < 10) {
        return result + 1
    } else {
        return result + 2
    }
}

console.log(sumarConInteres(3,4))
console.log(sumarConInteres(9,5))

*/
//5

function factorial(n) {
    if (n < 2) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

function fibonacci(n){
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}


function generarSerie(desde, hasta, operacion) {
    for (let i = desde; i < hasta + 1; i++) {
        console.log(operacion(i));
    }
}

generarSerie(1, 10, fibonacci)
generarSerie(1, 10, factorial)

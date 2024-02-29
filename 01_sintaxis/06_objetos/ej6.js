console.log("Parte 1\n");

let aplicacion = {
    nombre: "Aplicación Web",
}

aplicacion.puerto = 8000;
aplicacion.hostname = "localhost";

for (let propiedad in aplicacion) {
    console.log(propiedad + ": " + aplicacion[propiedad]);
}

delete aplicacion.hostname;

console.log(aplicacion);

console.log("\nParte 2");

for (let propiedad in aplicacion) {
    console.log(propiedad + ": " + aplicacion[propiedad]);
}


console.log("\nParte 3");
let cuentaCorriente = {
    saldoInicial: 1500,
    compras: -300,
    alquiler: -800,
}

function sumaPropiedades(objeto) {
    let suma = 0;
    for (const propiededad in objeto) {
        suma += objeto[propiededad];
    }
    return suma;
}

console.log(sumaPropiedades(cuentaCorriente));


console.log("\nParte 4");

let inversiones = {
    fondos: 300,
    oro: 400,
};

function multiplica(objeto, numero) {
    for (const propiededad in objeto) {
        objeto[propiededad] *= numero;
    }
}

multiplica(inversiones, 2);

console.log(inversiones);

console.log("\nParte 5");

class FitnessCalc  {
    deKmAm (dato) {
        return Number((dato * 1000 / 3600).toFixed(2));
    }
    deMaKm (dato) {
        return Number((dato * 3600 / 1000).toFixed(2));
    }
}

class calculadora {
    velocidad = 1;
    calcular = new FitnessCalc();


}

let miCalc = new calculadora();
console.log(miCalc.velocidad)
console.log(miCalc.calcular.deKmAm(miCalc.velocidad))
console.log(miCalc.calcular.deMaKm(miCalc.velocidad))






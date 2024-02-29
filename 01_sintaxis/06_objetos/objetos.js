//1
let aplicacion = {
    nombre: "Aplicacion Web"
};

aplicacion.puerto = "8000";
aplicacion.hostname = "localhost";

console.log(aplicacion.nombre);
console.log(aplicacion.puerto);
console.log(aplicacion.hostname);


delete aplicacion.hostname;

console.log(aplicacion);
//2
let aplicacion2 = {
    nombre: "Aplicacion Web"
};

aplicacion2.puerto = "8000";
aplicacion2.hostname = "localhost";

for (let clave in aplicacion2) {
    console.log(clave + ": " + aplicacion2[clave]);
}

delete aplicacion2.hostname;

console.log(aplicacion2);

//3
let cuentaCorriente = {
    saldoInicial: 1500,
    compras: -300,
    alquiler: -800,
};

function calcular(cuenta = 0) {

    if (cuenta === 0) {
        console.log("Cuenta no valida...")
    } else {

        let result = 0;

        for (let clave in cuenta) {
            result += cuenta[clave]
        }
        return result;
    }
}

console.log(calcular(cuentaCorriente));

//4

let inversiones = {
    fondos: 300,
    oro: 400
};

function inversion(inv = 0, n = 0) {

    if (inv === 0 || n === 0) {
        console.log("Error");
    } else {
        for(let clave in inv) {
            inv[clave] *= n;
        }
    }
}
inversion(inversiones, 5);
console.log(inversiones);

//5



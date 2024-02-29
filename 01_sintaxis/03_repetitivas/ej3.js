let n = 10;
let i = 1;

console.log("Parte 1");
while (i <= n) {
    console.log(i);
    i++;
}

console.log("Parte 2");
let cadena = prompt("Intoduce tu frase: ");

while (cadena.length < 30) {
    cadena += ".";
}
console.log(cadena)

console.log("Parte 3");

let sumatorio = 0;
for (let j = 20; j <= 50; j++) {
    sumatorio += j;
}
console.log(sumatorio);

console.log("Parte 4");

for (let j = 1; j <= 20; j++) {
    if (j %2 === 0) {
        console.log(j);
    }
}

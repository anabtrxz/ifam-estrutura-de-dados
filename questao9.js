let n = parseInt(prompt("Quantos números terá a lista?"));
let numeros = [];
let somaImpares = 0;

for (let i = 0; i < n; i++) {
  numeros[i] = parseInt(prompt("Digite o número da posição " + i + ":"));
  if (i % 2 != 0) somaImpares += numeros[i];
}

document.writeln("Lista: " + numeros + "<br>");
document.writeln("Soma das posições ímpares: " + somaImpares)
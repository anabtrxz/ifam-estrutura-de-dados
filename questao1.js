let n = parseInt(prompt("Informe a quantidade de números do seu teclado:"))
const vetor = []
for (let i = 0; i<n; i++){
    vetor[i] = parseInt(prompt(`Informe o ${i+1}° Número:`))
    document.writeln(vetor[i])
}
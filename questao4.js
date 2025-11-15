const a = [], b = [], c = []
alert("Preencha o vetor a: ")
for (let i = 0; i < 4; i++) {
  a[i] = parseInt(prompt())
} alert("Preencha o vetor b: ")
for (let i = 0; i < 4; i++) {
  b[i]= parseInt(prompt())
}
for(let i = 0; i < 4; i++){
  c[i]= a[i]*b[i]
} alert("Produto dos vetores: ")
for (let i = 0; i < 4; i++) {
  document.writeln(c[i])
}
var vetor = new Array();
vetor[0] = "Olá";
vetor[98] = "estudo";
vetor[99] = "IFAM";

//alert(vetor[vetor.length - 1])

//vetor.forEach((item, indice, Array) => {
//  alert(item, indice);
//});

vetor.shift(0)

vetor.forEach((item, indice, Array) => {
  alert(item, indice);
});
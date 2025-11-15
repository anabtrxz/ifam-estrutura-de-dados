var marca = new Array
marca[0] = "Nike";
marca[1] = "Adidas";
marca[2] = "Apple";
console.log(marca.length);
var primeiro = marca.shift(0); // remove Nike do início

marca.forEach((item, indice, Array) => {
  alert(item, indice);
});
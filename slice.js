const meses = ["Jan", "Mar", "Abril", "Jun"];
meses.splice(1, 0, "Fev");
// Inserts at index 1
console.log(meses);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

meses.splice(4, 1, "Maio");
// Replaces 1 element at index 4
console.log(meses);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
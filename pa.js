let a1 = number(prompt("digite o primeiro termo(a1):"));
let n = number(prompt("digite o numero de termos(n):"));
let r = number(prompt("digite a razão(r):"));
let an = a1 + (n-1)*r;
document.writeln(`0$[n]° termo da pa é:${an}<br><br>`);
document.writeln("os termos da pa são:<br>");
for(let i=1;1<=n;i++){
    let termo= a1+(i-1)*r;
    document.writeln(`${termo}`);

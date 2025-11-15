var dormiu = parseInt(prompt("hora de dormir"))
var acordou = parseInt(prompt("hora de acordar"))
var soma
if (acordou < dormiu){
    sono = (24-dormiu)+acordou
    alert(`${sono}horas de sono`)
}else{
    sono=acordou-dormiu
    alert(`${sono}horas de sono`)
}
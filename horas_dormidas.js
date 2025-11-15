var acordou = parseInt(prompt("hora de acordar"))
var dormiu = parseInt(prompt("hora de dormir"))
var sono=0
if (dormiu>12 && acordou <12){
    sono = 24-(dormiu-acordar)
    alert(`${sono}horas de sono`)
}else{
    sono=acordou-dormiu
    alert(`${sono}horas de sono`)
}let i
while( i=1 <= sono){
    alert(`${i}hora(s)dormindo`)
i++
}
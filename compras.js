let carrinho= parseInt(prompt("Quantidade de itens"))
let total=0, itens=0
document.writeln(`<br> Mercado mercadão <br><br>`)
for (let i=1; i<=carrinho; i++){
    itens = parseFloat(prompt(`valor do item ${i}`)) 
    document.writeln (`Item ${i}: R$ ${itens}<br>`)
    total+=itens
}
    document.writeln(`  Valor total: R$ ${total}`)

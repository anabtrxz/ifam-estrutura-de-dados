const copas = []
let quantidade
while(quantidade !== 0){
    quantidade = prompt("Digite uma opção:\n1. Inserir no início\n2. Remover no início\n3. Inserir no final\n4. Remover no final\n-1. sair")
    switch(quantidade){
        case "1":
            copas.unshift("1954")
                document.writeln ("<b><br>Após unshift:</br></b>", copas)
                break;
        case"2":
            copas.shift()
            document.writeln("<b><br>Após shift:</br></b>", copas)
            break;
        case'3':
            copas.push("2026")
            document.writeln("<b><br>Após push:</br></b>", copas)
            break;
            case '4':
                copas.pop()
                document.writeln("<b><br>Após remover o final:</br></b>", copas)
                break;
            case"5":
                copas.length()
                break;
            default:
                    alert("Opção inválida.")
    }
    document.writeln("<b><br>Após tamanho:</br></b>", copas.lenght)
}
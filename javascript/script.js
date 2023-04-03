// Switch = estrutura de decisão
let opcao = parseInt(prompt("Escolha uma opção: "));

switch(opcao){
    case 1:
        document.write("Primeira opção");
    break;
    case 2:
        document.write("Segunda opção");
    break;
    case 3:
        document.write("Terceira opção");
    break;
    case 4:
        document.write("Quarta opção");
    break;
    default:
        document.write("Opção inválida")
    break;
}

// Incremento:
let valor = 7
console.log(valor) // Retorna 7
valor++ //Incrementa 1 -> pode ser feito valor = valor + 1 ou valor += 1
console.log(valor) // Retorna 8

//Decremento:
let valor2 = 6
console.log(valor2) // Retorna 6
valor2-- //Decrementa 1 -> pode ser feito valor = valor - 1 ou valor -= 1
console.log(valor2) //Retorna 5


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
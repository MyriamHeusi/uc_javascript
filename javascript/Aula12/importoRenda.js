// 1 - Crie um algoritmo que calcule a porcentagem do imposto de renda e exiba apenas a porcentagem ao Usuário
// 2 - Defina uma variável chamada salário Ex: var salário
// 3 - Atribua um valor de salário a variavel salario Ex: 1500.00
// 4 - Devemos respeitar a seguintes regras:
    // Até 2259,20 -> Isento não paga imposto de renda portanto é ZERO
    // De 2259,21 até 2.826,65 -> 7,5%
    // De 2.826,66 até 3.751,05 -> 15%
    // De 3.751,06 até 4.664,68 -> 22,5%
    // Acima de 4.664,68 -> 27,5


 var salario = 4500.0;

if (salario <= 2259.2) {
  console.log("0%");
  // Até 2259,20 -> Isento não paga imposto de renda portanto é ZERO
} else if (salario >= 2259.2 && salario <= 2826.65) {
  console.log("7,5%");
  // De 2259,21 até 2.826,65 -> 7,5%
} else if (salario <= 2826.66 && salario <= 3751.05) {
  console.log("15%");
  // De 2.826,66 até 3.751,05 -> 15%
} else {
  console.log("27,5%");
  // Acima de 4.664,68 -> 27,5
}

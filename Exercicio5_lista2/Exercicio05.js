/*Faça um algoritmo que receba como argumento de entrada o total de
ganhos de uma pessoa, em reais, e calcule o desconto do imposto de renda,
segundo a tabela abaixo:

Faixa Salarial em R$ Alíquota de Desconto
Até 500,00 --- ------Isento (0%)
De 500,01 até 1.500,00 --- 10%
De 1500,01 até 2.500,00--- 15%
Acima de 2.500,01 ---------20% */

let totalGanhos = 3000;
let desconto = 0; //importante iniciar para nao dar valor not definid
const taxa10 = 0.1;
const taxa15 = 0.15;
const taxa20 = 0.20;


if (totalGanhos<=500){
    desconto=0;
}else if (totalGanhos <=1500){
    desconto = totalGanhos * taxa10;
} else if (totalGanhos <=2500){
    desconto = totalGanhos * taxa15;
} else {
    desconto = totalGanhos * taxa20;
}

console.log('O desconto do imposto de renda é de: R$' + desconto.toFixed(2));

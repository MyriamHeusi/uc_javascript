/*8. Uma empresa de vendas tem três corretores. A empresa paga ao
corretor uma comissão calculada de acordo como o valor de suas vendas.
 Se o valor total da venda de um corretor for maior que R$50.000,00, a comissão
será de 12% do valor vendido. 
Se o valor da venda do corretor estiver entre R$30.000,00 e R$50.000,00 (incluindo extremos), a comissão será de 9,5%.
Em qualquer outro caso a comissão será de 7%.
Construa um algoritmo que gere um relatório contendo nome, valor da venda e comissão de cada um dos corretores. 
O relatório, também, deverá mostrar o total de vendas da empresa.*/

// Iniciando variáveis de maneira didática
var nomeCorretor1 = prompt("Digite o nome do corretor 1:");
var vendasCorretor1 = parseFloat(prompt("Digite o valor das vendas do corretor 1:"));

var nomeCorretor2 = prompt("Digite o nome do corretor 2:");
var vendasCorretor2 = parseFloat(prompt("Digite o valor das vendas do corretor 2:"));

var nomeCorretor3 = prompt("Digite o nome do corretor 3:");
var vendasCorretor3 = parseFloat(prompt("Digite o valor das vendas do corretor 3:"));

// Calculando comissão de cada corretor
var comissaoCorretor1, comissaoCorretor2, comissaoCorretor3;

if (vendasCorretor1 > 50000) {
    comissaoCorretor1 = vendasCorretor1 * 0.12;
} else if (vendasCorretor1 >= 30000 && vendasCorretor1 <= 50000) {
    comissaoCorretor1 = vendasCorretor1 * 0.095;
} else {
    comissaoCorretor1 = vendasCorretor1 * 0.07;
}
// Definindo o preço de custo do produto
var precoCusto = 100;

// Definindo o percentual de acréscimo
var percentualAcrescimo = 50;

// Calculando o valor de venda
var valorVenda = precoCusto * (1 + percentualAcrescimo / 100);

// Mostrando o valor de venda ao usuário
console.log("O valor de venda do produto é: R$ " + valorVenda.toFixed(2));


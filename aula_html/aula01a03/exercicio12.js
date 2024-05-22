// Definiro custo de fábrica
var custoFabrica = 30000; //R$30.000

// Calcular os impostos sobre o custo de fábrica (45% do custo de fábrica)
var impostos = 0.45 * custoFabrica;

// Calcular o custo intermediário (custo de fábrica + impostos)
var custoIntermediario = custoFabrica + impostos;

// Calcular a percentagem do distribuidor sobre o custo intermediário (28% do custo intermediário)
var percentagemDistribuidor = 0.28 * custoIntermediario;

// Calcular o custo ao consumidor (custo intermediário + percentagem do distribuidor)
var custoConsumidor = custoIntermediario + percentagemDistribuidor;

// Exibir o custo ao consumidor
console.log("O custo ao consumidor do carro é: R$ " + custoConsumidor.toFixed(2));
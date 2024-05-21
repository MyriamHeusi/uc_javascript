// Informar o salário inicial
var salarioInicial = 1412; //R$1412

// Informar o percentual de aumento
var aumentoPercentual = 37;

// Calcular o valor do aumento
var aumento = salarioInicial * (aumentoPercentual / 100);

// Calcular o novo salário
var novoSalario = salarioInicial + aumento;

// Exibir o novo salário
console.log("O novo salário com aumento de 37% é: R$ " + novoSalario.toFixed(2));
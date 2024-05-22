// Solicitar o valor da compra ao usuário
var valorCompra = parseFloat(prompt("Digite o valor da compra:"));

// Verificar o desconto com base no valor da compra
var desconto;
if (valorCompra >= 5000) {
    desconto = valorCompra * 0.20; // 20% de desconto
} else {
    desconto = valorCompra * 0.15; // 15% de desconto
}

// Calcular o valor final da compra após o desconto
var valorFinal = valorCompra - desconto;

// Exibir o valor final após o desconto em um alert
alert("Valor da compra: R$" + valorCompra.toFixed(2) + "\nDesconto aplicado: R$" + desconto.toFixed(2) + "\nValor final após desconto: R$" + valorFinal.toFixed(2));
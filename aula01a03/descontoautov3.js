/*Ler o ano de fabricação e o valor de um produto, calcular e apresentar o valor de desconto possível.
Se o valor do produto for maior ou igual a 1000 (>=1000), 
    entao um desconto de 25% deverá ser aplicado
 quando seu ano de fabricação for maior que 2000, 
 senao, o desconto deverá ser igual a 20%.
Caso o valor do produto não seja maior ou igual a 1000, deverá ser aplicado um desconto de 10% sobre esse valor.*/

//não esquecer de iniciar variaveis


if (valorProduto >= 1000) {
   //se ano de fabricacao for maior que 2000
   if (anoFabricacao > 2000) {
      desconto = valorProduto * taxa25;
   } else {
      desconto = valorProduto * taxa20;
   }
} else {
   desconto = valorProduto * taxa10;
}

//testar com valor do produto maior que 1000 e menor que 1000
console.log("Valor do desconto é de R$: ", desconto);
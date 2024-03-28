/*Ler o ano de fabricação e o valor de um produto, calcular
e apresentar o valor de desconto possível.
O valor do desconto será igual a 20% do valor do produto
quando este valor for maior que 1000, caso contrário, o desconto será equivalente à 10% sobre o valor do produto. */
//não esquecer de iniciar variaveis
let anoFabricacao = 1999;
let valorProduto =500;
let desconto = 0.00; //importante iniciar para nao dar valor not definid
const taxa20 = 0.2;
const taxa10 = 0.1;

if (valorProduto > 1000){
    desconto=valorProduto*taxa20;
 } 

 else{
    desconto= valorProduto*taxa10;
 }
 
 //testar com valor do produto maior que 1000 e menor que 1000
 console.log("Valor do desconto é de R$: ", desconto);
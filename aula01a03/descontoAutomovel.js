
//não esquecer de iniciar variaveis
let anoFabricacao = 1999;
let valorProduto =500;
let desconto = 0.00; //importante iniciar para nao dar valor not definid
const taxa = 0.2;

if (valorProduto > 1000){
    desconto=valorProduto*taxa;
 } 
 
 //testar com valor do produto maior que 1000 e menor que 1000
 console.log("Valor do desconto é de R$: ", desconto);
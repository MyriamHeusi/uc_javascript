/*informar valorProduto
calcular desconto (valor do produto * porcentual desconto)
calcular novovalorProduto
escrever novovalorProduto
*/

let valorProduto;
let desconto;
let novoValorProduto;

//declarar constante
const taxaDesconto =0.09; //9/100

//iniciar as variaveis
valorProduto=0.0;
desconto=0.0;
novoValorProduto=0.0;

//coleta/entrada de dados
valorProduto=100.00;

//processamento
desconto = valorProduto * taxaDesconto;
novoValorProduto = valorProduto - desconto;

//saida
console.log("Novo Valor do Produto " + novoValorProduto);



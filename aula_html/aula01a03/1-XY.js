/*1) Escreva o comando de seleção para cada uma das situações a seguir:
a) Se X for maior que Y ou se Z for menor ou igual a 30, multiplique X por 2.
 Caso contrário, divida X por 2 e divida Z por 5;

 se (x>y)
entao
 ou || (z<=30)
senaox=x*2
entaop
x=x/2 e
z=z/5

b) Se o desconto for menor que 25% e o preço do produto maior que
R$25.000,00, apresentar o nome do produto.

 se (desconto <=25%) e
(preço>25000)
entao
apresentar nomeProduto


*/

if (X > Y || Z <= 30) {
    X = X * 2;
} else {
    X = X / 2;
    Z = Z / 5;
}
//Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.

//declarar variaveis
let n1;
let n2;
let n3;
let n4;
let restoDivisaopor2;
let restoDivisaopor3;

//iniciar variaveis
n1=0;
n2=0;
n3=0;
n4=0;
restoDivisaopor2=0;
restoDivisaopor3=0;

//entrada de dados
n1=13;
n2=51;
n3=15;
n4=60;

//processamento
restoDivisaopor2=n1%2;
restoDivisaopor3=n1%3;

//verificar se o n1 é divisivel por 2 E 3 (se o resto(módulo%) for igual a zero, é divisivel)
if (restoDivisaopor2 == 0) {
    if (restoDivisaopor3 == 0) {
        console.log("Primeiro numero [", n1, "] é divisivel por 2 e 3.");
    } else {
        console.log("Primeiro ELSE/ ELSE Resto é divisivel por 3.");
        console.log("Primeiro numero [", n1, "] NÃO é divisivel por 2 e 3.");   
    }
} else {
    console.log("Primeiro numero [", n1, "] NÃO é divisivel por 2 e 3.");
    console.log("Segundo ELSE/ ELSE Resto é divisivel por 2.");
}

//processamento
restoDivisaopor2 = n2 % 2;
restoDivisaopor3 = n2 % 3;

//verificar se o n2 é divisivel por 2 E 3 (se o resto(módulo%) for igual a zero, é divisivel)
if (restoDivisaopor2 == 0) {
    if (restoDivisaopor3 == 0) {
        console.log("Segundo numero [", n2, "] é divisivel por 2 e 3.");
    }
} else {
    console.log("Segundo numero [", n2, "] NÃO é divisivel por 2 e 3.");
}

//processamento
restoDivisaopor2 = n3 % 2;
restoDivisaopor3 = n3 % 3;

//verificar se o n3 é divisivel por 2 E 3 (se o resto(módulo%) for igual a zero, é divisivel)
if (restoDivisaopor2 == 0) {
    if (restoDivisaopor3 == 0) {
        console.log("Terceiro numero [", n3, "] é divisivel por 2 e 3.");
    }
}else {
    console.log("Terceiro numero [", n3, "] NÃO é divisivel por 2 e 3.");
}

//processamento
restoDivisaopor2 = n4 % 2;
restoDivisaopor3 = n4 % 3;

//verificar se o n4 é divisivel por 2 E 3 (se o resto(módulo%) for igual a zero, é divisivel)
if (restoDivisaopor2 == 0) {
    if (restoDivisaopor3 == 0) {
        console.log("Quarto numero [", n4, "] é divisivel por 2 e 3.");
    }
}else {
    console.log("Quarto numero [", n4, "] NÃO é divisivel por 2 e 3.");
}

 



/*verificar se o n1 é divisivel por 2 ou 3 (se o resto(módulo%) for igual a zero, é divisivel)
if (restoDivisaopor2==0);{
   console.log("Primeiro numero é divisivel por 2:");
}

if(restoDivisaopor3==0){
    console.log("Primeiro numero é divisivel por 3:");
}
*/
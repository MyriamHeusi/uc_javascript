//declararvariavel
let n1;
let n2;
let n3;
let n4;
let somaPesos;
const p1=1;
const p2=2;
const p3=3;
const p4=4;
let mediaPonderada;

//iniciar as variaveis
n1=0;
n2=0;
n3=0;
n4=0;
mediaPonderada=0;

//coleta/entrada de dados
n1=4;
n2=7;
n3=3;
n4=25;

//processamento
somaPesos=p1+p2+p3+p4;
mediaPonderada=((n1*p1)+(n2*p2)+(n3*p3)+(n4*p4))/(somaPesos);

//saida
console.log("Media Poderada: " + mediaPonderada);
/*2) Construa o fluxo de dados e, em seguida, o algoritmo que leia o dia da
semana informado e apresente a mensagem “Casa” para os sábados e os
domingos e “Trabalho” para demais outros dias. Considere que os dias da
semana são definidos: “Segunda”, “Terca”, “Quarta”, “Quinta”, “Sexta”,
“Sábado” e “Domingo”. */

/* Se (diaSemana="sabado") || (diaSemana="domingo")
entao exibir "casa"
senão exibir "trabalho"*/

let diaDaSemana = "Domingo";
let mensagemSaida ="";

// Verificando o dia da semana e exibindo a mensagem apropriada
if ((diaDaSemana == "Sabado" || diaDaSemana == "Domingo")) {
    mensagemSaida ="Casa";
} else {
    mensagemSaida ="Trabalho";
}

console.log(mensagemSaida, "b");
console.log(mensagemSaida, "e");
console.log("o tamanho da mensagem de saida é de: ",mensagemSaida.length);
console.log("Mensagem em letras maiusuculas é: ",mensagemSaida.toUpperCase());
console.log("Mensagem em letras minusculas é: ",mensagemSaida.toLowerCase());
console.log("Mensagem em letras é: ",mensagemSaida.toLowerCase());
console.log("Caracter de casa na posição 1 na é: ",mensagemSaida.charAt(1));
console.log("Caracter entre posiçoes 3 e 5: ",mensagemSaida.substring(3,5));
console.log("Caracter 4 posiçoes a partir da primeira posição: ",mensagemSaida.substr(0,2));

function showResultado(textoResultado) {
    alertaRow = document.querySelector("#idAlertRow");
    alerta = document.querySelector("#idAlerta");
    
    
    alerta.appendChild(document.createTextNode(textoResultado));
    alertaRow.style.display = 'block';
}

function escondeResultado() {
    alerta = document.querySelector("#idAlertRow");
    alerta.style.display = 'none';
}

btn = document.querySelector("#idCard");

btn.addEventListener('click', function () {

//deixar aqui
    escondeResultado();

    //declararvariavel
let n1;
let n2;
let n3;
let n4;
let mediaPonderada;

//iniciar as variaveis
n1=0;
n2=0;
n3=0;
n4=0;
mediaPonderada=0;

//coleta/entrada de dados
n1=Number.parseInt(prompt ("Informe o primeiro numero: "));
n2=Number.parseInt(prompt ("Informe o segundo numero: "));
n3=Number.parseInt(prompt ("Informe o terceiro numero: "));
n4=Number.parseInt(prompt ("Informe o quarto numero: "));

//processamento
mediaPonderada=((n1*1)+(n2*2)+(n3*3)+(n4*4))/(1+2+3+4);

//saida
console.log("Media Poderada: " + mediaPonderada);

    alert(mediaPonderada);
    showResultado(mediaPonderada);

});

/*Um vendedor tem seu salário calculado em função do valor total de suas
vendas. Esse cálculo é feito de acordo com o seguinte critério:
Se o valor total de suas vendas for maior que R$ 20.000,00, o vendedor
receberá como salário 10% do valor das vendas.
Caso contrário, receberá apenas 7,5% do valor das vendas.
Construa um algoritmo que após ler o valor total das vendas de um
vendedor, apresente o valor ganho por ele.*/

// Dados dos corretores
var corretores = [
    { nome: "Corretor 1", vendas: 60000 },
    { nome: "Corretor 2", vendas: 35000 },
    { nome: "Corretor 3", vendas: 25000 }
];

// Variável para total de vendas da empresa
var totalVendasEmpresa = 0;

// Calcular comissão e mostrar o relatório
function calcularComissao(corretores) {
    var relatorio = "Relatório de Vendas:\n\n";

    corretores.forEach(function(corretor) {
        var comissao;

        if (corretor.vendas > 50000) {
            comissao = corretor.vendas * 0.12;
        } else if (corretor.vendas >= 30000 && corretor.vendas <= 50000) {
            comissao = corretor.vendas * 0.095;
        } else {
            comissao = corretor.vendas * 0.07;
        }

        totalVendasEmpresa += corretor.vendas;

        relatorio += `${corretor.nome}: Vendas R$${corretor.vendas.toFixed(2)} - Comissão R$${comissao.toFixed(2)}\n`;
    });

    relatorio += "\nTotal de vendas da empresa: R$" + totalVendasEmpresa.toFixed(2);

    alert(relatorio);
}

// Calcular comissão e mostrar o relatório
calcularComissao(corretores);
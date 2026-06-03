// ========================================================
// ARQUIVO: script.js (PROJETO AGRINHO - SUSTENTABILIDADE)
// ========================================================

// --- CONFIGURAÇÃO INICIAL (VERSÃO 2 REFEITA) ---
// Preço fixo do quilo da semente de milho especial para o projeto
const PRECO_SEMENTE = 150.0;

/**
 * FUNÇÃO 1: PROCESSAR PRODUÇÃO DE BIOPLÁSTICO
 * Pega os valores digitados na tela, faz o cálculo e valida o limite.
 */
function calcularProducaoBioplastico() {
    // Pega os valores dos inputs do HTML (Convertendo para número)
    const quantidadeMilho = Number(document.getElementById("i1").value);
    const fatorRendimento = Number(document.getElementById("i2").value);
    
    // Faz a multiplicação (Antigo x * y)
    const totalProduzido = quantidadeMilho * fatorRendimento;
    const elementoResultado = document.getElementById("res");

    // Validação de limite (Se passar de 100kg, avisa que o custo/esforço está alto)
    if (totalProduzido > 100) {
        elementoResultado.style.color = "red";
        alert("Atenção: Volume de produção muito alto para este lote!");
    } else {
        elementoResultado.style.color = "green";
    }

    // Atualiza o texto na tela com o resultado
    elementoResultado.innerHTML = "Total de Bioplástico: " + totalProduzido + " kg";
    console.log("Calculado: Produção de bioplástico atualizada.");
}

/**
 * FUNÇÃO 2 (PARTE A): CALCULAR INVESTIMENTO TOTAL
 * Recebe a quantidade de sementes e retorna o valor em dinheiro.
 */
function calcularInvestimentoTotal(quantidade) {
    return quantidade * PRECO_SEMENTE;
}

/**
 * FUNÇÃO 2 (PARTE B): ATUALIZAR INTERFACE
 * Exibe o valor financeiro na tela com a cor correspondente ao gasto.
 */
function atualizarInterface(valorTotal) {
    const display = document.getElementById("resultadoDisplay");
    
    // Mostra o valor formatado como moeda (R$)
    display.innerText = `O investimento total em sementes é: R$ ${valorTotal.toFixed(2)}`;
    
    // Se o investimento passar de 
    }
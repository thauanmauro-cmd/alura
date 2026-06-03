<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Estação Espacial Alpha</title>

    <style>
        /* AQUI COMEÇA O NOVO CSS COM ESTILO NEON */

        /* ESTILO PARA O BLOCO PRINCIPAL (FUNDO TOTALMENTE PRETO) */
        .bloco-cyber {
            background-color: #0b0b0e; /* PRETO PROFUNDO */
            padding: 35px; /* ESPAÇO INTERNO */
            font-family: 'Courier New', Courier, monospace; /* FONTE ESTILO COMPUTADOR ANTIGO */
            text-align: center; /* ALINHA O TEXTO NO MEIO */
            color: #00ffcc; /* LETRAS EM VERDE CIANO BRILHANTE */
            border: 3px solid #8a2be2; /* BORDA ROXA AO REDOR DE TUDO */
            border-radius: 15px; /* CURVA BEM AS BORDAS */
        }

        /* ESTILO PARA A CAIXA CENTRAL (ESTILO TERMINAL DE COMANDO) */
        .caixa-terminal {
            background-color: #121214; /* CINZA QUASE PRETO */
            border: 1px dashed #00ffcc; /* BORDA TRACEJADA EM CIANO */
            margin: 30px; /* ESPAÇO POR FORA */
            padding: 25px; /* ESPAÇO POR DENTRO */
            color: #ffffff; /* TEXTO EM BRANCO PARA DESTACAR A LEITURA */
            border-radius: 5px;
        }

        /* ESTILO DO BOTÃO DE TRANSMISSÃO */
        #btn-transmissao {
            background: #8a2be2; /* FUNDO ROXO */
            color: #ffffff; /* LETRA BRANCA */
            border: 2px solid #00ffcc; /* BORDA CIANO PARA CASAR OS DOIS NEONS */
            padding: 14px 30px; /* TAMANHO DO BOTÃO */
            font-weight: bold; /* TEXTO EM NEGRITO */
            font-size: 15px;
            cursor: pointer; /* ICONE DA MÃOZINHA */
            letter-spacing: 1px; /* SEPARA UM POUCO AS LETRAS */
            transition: 0.2s; /* VELOCIDADE DO EFEITO */
        }

        /* EFEITO QUANDO PASSA O MOUSE NO BOTÃO */
        #btn-transmissao:hover {
            background: #00ffcc; /* INVERTE: FUNDO VIRA CIANO */
            color: #0b0b0e; /* LETRA VIRA PRETA */
        }

        /* ESTILO DO RODAPÉ */
        .rodape-terminal {
            font-size: 11px; /* LETRA PEQUENININHA */
            margin-top: 60px; /* EMPURRA BEM PARA BAIXO */
            border-top: 1px solid #333; /* LINHA ESCURA DISCRETA */
            padding-top: 15px;
            color: #555555; /* CINZA ESCURO */
        }
    </style>
</head>
<body>
    
    <div class="bloco-cyber">

        <div style="font-size: 26px; font-weight: bold; text-shadow: 0 0 10px #00ffcc;">
            🛸 BASE ESPACIAL NEON
        </div>
        
        <div class="caixa-terminal">
            <p style="font-size: 16px; line-height: 1.5;">
                Curiosidade: No espaço profundo, o silêncio é absoluto. Como o som precisa de matéria para se propagar (como o ar ou a água) e o espaço é um vácuo, ninguém consegue ouvir nada por lá!
            </p>

            <button id="btn-transmissao" onclick="alert('📡 Transmitindo dados para a Terra... Sinal enviado!')">
                ABRIR FREQUÊNCIA
            </button>
        </div>

        <div class="rodape-terminal">
            Sistemas Alpha v2.0 - Desenvolvido por mim
        </div>
    </div>

    <script>
        // MENSAGEM ALTERADA NO CONSOLE
        console.log("Frequência de rádio estabelecida. Terminal pronto.");
    </script>
</body>
</html>
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual característica você valoriza mais em um animal de estimação?",
        alternativas: [
            {
                texto: "Independência!",
                afirmacao: "principal característica de um gato."
            },
            {
                texto: "Companheirismo!",
                afirmacao: "principal característica de um cachorro."
            }
        ]
    },
    {
        enunciado: "Qual tipo de espaço você tem disponível em casa?",
        alternativas: [
            {
                texto: "Pequeno apartamento .",
                afirmacao: "lugares pequenos são perfeitos para gatos, "
            },
            {
                texto: "Casa com quintal",
                afirmacao: "quintais são perfeitos para cachorros, já que são muito ativos,"
            }
        ]
    },
    {
        enunciado: "Quanto tempo você pode dedicar ao exercício diário do seu animal de estimação?",
        alternativas: [
            {
                texto: "Pouco tempo.",
                afirmacao: "gatos por serem independentes, tomam até banho sozinhos e gostam de ficar sozinhos,"
            },
            {
                texto: "Muito tempo.",
                afirmacao: "cachorros demandam muito do seu tempo, são carentes."
            }
        ]
    },
    {
        enunciado: "Como você lida com a limpeza?",
        alternativas: [
            {
                texto: "Estou bem com uma caixa de areia.",
                afirmacao: "Caixas de areia são o ideal de um gato,."
            },
            {
                texto: "Prefiro levar o animal para passear e limpar o quintal ",
                afirmacao: "Cachorros amam passear, e muito coco.. prepare sua sacola,"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes qualidades é mais importante para você? ",
        alternativas: [
            {
                texto: "Discrição e independência.",
                afirmacao: "O gato é o ser perfeito para ti!!"
            },
            {
                texto: "Lealdade e proteção.",
                afirmacao: "Você está pronto para adotar um cachorrinho! "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você…";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

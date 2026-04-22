
const personagens = [
    {
        nome: "Zeus",
        descricao: "Deus do céu e do trovão.",
    },
    {
        nome: "Hades",
        descricao: "Deus do submundo e dos mortos.",
    },
    {
        nome: "Poseidon",
        descricao: "Deus do mar, dos terremotos e dos cavalos.",
    }
]

const pontuacaoPersonagens = {
    "Zeus": 0,
    "Hades": 0,
    "Poseidon": 0
};

const perguntas = [
    {
        pergunta: "Se você precisa relaxar e se acalmar, o que escolheria fazer?",
        respostas:[
            "Fazer trilha pelas montanhas do acampamento.",
            "Ir para as aulas de caça nas florestas do acampamento.",
            "Ler um livro na sua cabana, prezando o silêncio."
        ], 
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 3;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 1;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 2;
        }
    },
    {
        pergunta: "Você cometeu um erro em uma missão e agora estão te confrontando sobre isso. O que você faz?",
        respostas:[
            "Você se sente culpado e admite seu erro, pedindo perdão a todos.",
            "Você admite, mas justifica seu erro apontando os erros dos outros da equipe. Para você, a culpa não foi só sua.",
            "Você nega o erro e sai do lugar, ignorando os outros."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 3;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 1;
        }
    },
    {        
        pergunta: "Após perderem na Corrida de Bigas, dois amigos seus começam a discutir feio. Qual atitude você tomaria?",
        respostas: [
            "Você não gosta de brigas, então tenta ironizar e fazer piadas com a situação para tentar fazer com que ela pareça algo besta e sem sentido.",
            "Você se preocupa com seus amigos, mas se irrita com a gritaria e decide deixar que eles se resolvam.",
            "Seus amigos estão sendo pouco objetivos, então você se envolve na discussão querendo falar mais alto para tentar guiá-los.",
            "Você se sente sob pressão, mas não quer tomar um lado, então fica pedindo para se acalmarem enquanto pensa em uma forma de resolver tudo."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 3;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 1;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemQuatro: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 2;
        }
    },
    {
        pergunta: "Durante um treino de agilidade na Parede de Escalada com Lava, você acaba se machucando e outros campistas vêm até você para te ajudar. Como você reage a isso?",
        respostas: [
            "Você detesta que haja muitas pessoas ao seu redor, então tenta sair o mais rápido dali, discretamente, para pedir ajuda a um amigo curandeiro.",
            "Sem demonstrar fraqueza, você rapidamente se levanta, agradece a preocupação de todos e volta ao treino, mas depois sai escondido para conferir com Quíron.",
            "Você não se machucou tanto assim, mas no fundo gostou da preocupação, então faz um dramazinho.",
            "Você se sente meio frustrado por falhar e, não querendo ser um estorvo, nega ajuda e tenta ir sozinho para a enfermaria."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 3;
        },
        itemQuatro: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 1;
        }
    },
    {
        pergunta: "No meio do Capture a Bandeira, seu time pede um plano para enfrentar os sentinelas. Qual você sugere?",
        respostas: [
            "Um plano maluco e criativo, onde você precisa subir em uma árvore ou irritar uma ninfa para criar distração.",
            "Você sabe que precisa pensar rápido, então decide seguir as regras e ser lógico, com um plano claro e poucos riscos.",
            "Você quer muito vencer, então vai fazer de tudo para isso, até mesmo ficar como isca e lutar sozinho.",
            "Um plano ardiloso: aproveitar a escuridão e dividir o grupo para se esgueirarem pelas laterais e pegá-los de surpresa."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 3;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 1;
        },
        itemQuatro: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 1;
        }
    },
    {
        pergunta: "Você encontra um campista mais novo claramente assustado antes da primeira missão dele. Como você reage?",
        respostas: [
            "Você tenta tranquilizá-lo com calma, mostrando que ele não está sozinho.",
            "Você não é bom em dar conselhos, mas tenta animá-lo explicando com quais utensílios ele pode se defender.",
            "Diz que ele precisa ser forte e enfrentar isso, mesmo com medo.",
            "Não fala muito, mas fica por perto observando para garantir que nada dê errado."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 3;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 1;
        },
        itemQuatro: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 2;
        }
    },
    {
        pergunta: "Após retornar de uma missão perigosa, mas com sucesso, você recebe um elogio inesperado. Como reage?",
        respostas: [
            "Você agradece e aceita com orgulho. No fundo, acha que mereceu mesmo.",
            "Você fica meio sem graça, mas valoriza o reconhecimento pelo esforço.",
            "Fica animado com o reconhecimento e começa a contar os grandes feitos que realizou.",
            "Você desvia do assunto ou minimiza, não gosta muito de atenção. Está mais feliz por voltar para casa."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 3;
        },
        itemQuatro: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 1;
        }
    },
    {
        pergunta: "No decorrer de uma missão, você nota que um de seus companheiros não está se esforçando. Você faz algo?",
        respostas: [
            "Sim, tenta questionar o comportamento da pessoa, explicando os riscos para a equipe.",
            "Sim, você discute com a pessoa. O sucesso da missão é essencial e você não permite que ela afete isso.",
            "Não, você segue fazendo a sua parte ou até mais para compensar, mas guarda rancor.",
            "Sim, você não curte brigas, então tenta conversar pacificamente para descobrir os motivos dele."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 1;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 1;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemQuatro: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 3;
        }
    },
    {
        pergunta: "Você suspeita que um campista pode ser um traidor. Que atitude você tomaria?",
        respostas: [
            "Começa a observá-lo com afinco, esperando o primeiro deslize para agir.",
            "Preza a lealdade e, por receio, decide alertar Quíron ou seus amigos sobre suas suspeitas.",
            "Decide se aproximar, fazer a pessoa rir e se tornar amigo próximo para que ela se revele.",
            "Não dá para assumir o risco. O melhor é agir preventivamente, capturar o suspeito e alertar a todos."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 1;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 3;
        },
        itemQuatro: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 1;
        }
    },
    {
        pergunta: "A profecia recebida para sua missão não parece ser algo bom. Como isso te afetaria?",
        respostas: [
            "Não muito. Você acredita que o destino é um caminho a ser seguido e fará sua parte.",
            "Você não teme. Sabe que profecias são ambíguas e seguirá tentando decifrá-la.",
            "Uma profecia ruim não te agrada; você quer saber exatamente o que evitar para cumprir seu dever.",
            "Bastante afetado. Você guarda cada palavra e tenta identificar onde ela se encaixa no percurso."
        ],
        itemUm: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 3;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemDois: function() {
            pontuacaoPersonagens["Zeus"] += 3;
            pontuacaoPersonagens["Hades"] += 1;
            pontuacaoPersonagens["Poseidon"] += 2;
        },
        itemTres: function() {
            pontuacaoPersonagens["Zeus"] += 2;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 1;
        },
        itemQuatro: function() {
            pontuacaoPersonagens["Zeus"] += 1;
            pontuacaoPersonagens["Hades"] += 2;
            pontuacaoPersonagens["Poseidon"] += 3;
        }
    }
]

function calcularPersonagem() {
    let personagemVencedor = null;
    let pontuacaoMaxima = -1;
    for (const personagem in pontuacaoPersonagens) {
        if (pontuacaoPersonagens[personagem] > pontuacaoMaxima) {
            pontuacaoMaxima = pontuacaoPersonagens[personagem];
            personagemVencedor = personagem;
        }
    }
    return personagemVencedor;
};

const template = document.querySelector('template');
const quiz = document.querySelector('#quiz');

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta

        dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);

        dt.querySelector('input').onchange =(event) => {
            const respostaSelecionada = parseInt(event.target.value);

            if (respostaSelecionada === 0) {
                item.itemUm();
            } else if (respostaSelecionada === 1) {
                item.itemDois();
            } else if (respostaSelecionada === 2) {
                item.itemTres();
            } else if (respostaSelecionada === 3) {
                item.itemQuatro();
            }
        }
        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
};

const botaoResultado = document.getElementById('mostrarResultado');

botaoResultado.onclick = () => {
    const personagemVencedor = calcularPersonagem();
    
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome') || "Semideus";

    const scoresJSON = encodeURIComponent(JSON.stringify(pontuacaoPersonagens));
    
    window.location.href = `resultado.html?nome=${encodeURIComponent(nome)}&vencedor=${personagemVencedor}&scores=${scoresJSON}`;
};


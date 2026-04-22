
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
            }
        }


        quizItem.querySelector('dl').appendChild(dt);

    }

    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem);
};

const botaoResultado = document.getElementById('mostrarResultado');
const resultado = document.getElementById('resultado');

botaoResultado.onclick = () => {
    const personagemVencedor = calcularPersonagem();
    resultado.textContent = `O personagem que mais combina com você é: ${personagemVencedor}`;

    const reiniciar = document.createElement('button');
    reiniciar.textContent = 'Reiniciar Quiz';
    reiniciar.onclick = () => location.reload();
    resultado.appendChild(reiniciar);
};


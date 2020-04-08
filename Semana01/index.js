const alunosDaTurmaA = [
    {
        nome: "Samuel",
        nota: 10
    },
    {
        nome: "Myek",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: "Paulo",
        nota: 5
    },
    {
        nome: "Diego",
        nota: 6
    },
    {
        nome: "Sicrano",
        nota: 2
    },
    {
        nome: "Beltrano",
        nota: 4
    }
]


function calculaMedia(alunos) {
    let soma = 0

    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length

    return media


}

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A media da turma ${turma} é menor que 5`)
    }
}

function marcarComoReprovado(alunos) {
    for (let aluno of alunos) {
        aluno.reprovado = false

        if (aluno.nota < 5) {
            aluno.reprovado = true
        }

    }

    console.table(alunos)
}

function envairMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`o Aluno ${aluno.nome} esta reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(alunos)
        envairMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)
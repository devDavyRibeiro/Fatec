use('exercicio01')
// 01)
const dadosFuncionarios = [
    {
        nome: "João Silva",
        cargo: "Desenvolvedor",
        sexo: "Masculino",
        salario: 5000,
        departamento: "TI",
        dataContratacao: new Date("2023-01-01"),
        projetos: ["Projeto A", "Projeto B"],
        dataCadastro: new Date()
    },
    {
        nome: "Maria Santos",
        cargo: "Analista de Dados",
        sexo: "Feminino",
        salario: 4800,
        departamento: "TI",
        dataContratacao: new Date("2023-06-15"),
        projetos: ["Projeto C"],
        dataCadastro: new Date()
    },
    {
        nome: "Carlos Oliveira",
        cargo: "Desenvolvedor",
        sexo: "Masculino",
        salario: 5100,
        departamento: "TI",
        dataContratacao: new Date("2022-03-10"),
        projetos: ["Projeto B"],
        dataCadastro: new Date()
    },
    {
        nome: "Ana Pereira",
        cargo: "Gerente de Projetos",
        sexo: "Feminino",
        salario: 7500,
        departamento: "Gestão",
        dataContratacao: new Date("2021-09-20"),
        projetos: ["Projeto A", "Projeto C"],
        dataCadastro: new Date()
    },
    {
        nome: "Luis Fernandes",
        cargo: "Contador",
        sexo: "Masculino",
        salario: 4200,
        departamento: "Contabilidade",
        dataContratacao: new Date("2020-11-05"),
        projetos: [],
        dataCadastro: new Date()
    },
    {
        nome: "Luiza Costa",
        cargo: "Analista Financeira",
        sexo: "Feminino",
        salario: 4600,
        departamento: "Financeiro",
        dataContratacao: new Date("2023-04-18"),
        projetos: ["Projeto D"],
        dataCadastro: new Date()
    },
    {
        nome: "João Souza",
        cargo: "Desenvolvedor",
        sexo: "Masculino",
        salario: 4900,
        departamento: "TI",
        dataContratacao: new Date("2023-07-01"),
        projetos: ["Projeto A"],
        dataCadastro: new Date()
    }
]

db.funcionarios.insertMany(dadosFuncionarios)

// 02)
use('exercicio01')
db.funcionarios.insertOne({
    nome:'Matheus Augusto Gueff',
    cargo: 'Estagiário',
    sexo: 'Masculino',
    salario: 2500,
    departamento:'TI',
    dataCadastro: new Date(),
    projetos:['OverSale', 'SaneaSP'],
    dataContratacao: new Date()
})

// 03)
use('exercicio01')
db.funcionarios.updateMany({},{$inc: {salario: 100}})

// 04)
use('exercicio01')
db.funcionarios.updateOne({nome:{$eq: 'João Silva'}}, {$push:{projetos:'Projeto C'}})

// 05)
use('exercicio01')
db.funcionarios.updateMany({},{$unset: {dataContratacao:''}})


// 06)
use('exercicio01')
db.funcionarios.updateMany({departamento:{$eq:'TI'}},{
    $set:{
        bonificacao:500
    }
})

// // 07)
db.funcionarios.deleteOne({nome:{$eq:'João Silva'}})
use('exercicio01')


// 08)
use('exercicio01')
db.funcionarios.deleteMany({departamento:{$eq:'Contabilidade'}})

//09)
use('exercicio01')
db.funcionarios.find({cargo:{$eq:'Desenvolvedor'}},{nome:1,sexo:1,salario:1})

//10)
use('exercicio01')
db.funcionarios.find({salario:{$gt:4000}})

//11)
use('exercicio01')
db.funcionarios.find(
    {dataContratacao:
        {$gt:new Date('2022-12-31'), $lt: new Date('2024-01-01')}},{})

//12)
use('exercicio01')
db.funcionarios.find({
    projetos:{$in:['Projeto A','Projeto B']}
})

//13)
use('exercicio01')
db.funcionarios.find({
    projetos:{
        $nin:['Projeto B']
    }
})

// 14)
use('exercicio01')
db.funcionarios.find({
    sexo:{
        $eq:'Feminino'
    }
},
{nome:1, salario:1, departamento:1, sexo:1}
)
// 15)
use('exercicio01')
db.funcionarios.find({
    $and:[
        {
            dataContratacao: {
                $lt:new Date('2023-01-01')
            }
        },
        {
            salario:{
                $lt: 5000
            }
        }
    ]
})

// 16)
use('exercicio01')
db.funcionarios.find({
    projetos: {$size:2}
})

// 17)
use('exercicio01')
db.funcionarios.find({   
    dataCadastro:{$gt: new Date('2025-01-27')}
})
use('exercicio01')
db.funcionarios.find()

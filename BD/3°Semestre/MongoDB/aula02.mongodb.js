//Tipos de Dados:
//String, Number, Boolean, Date, ObjectID
//Array, Object

use('estoque')
db.categorias.insertOne({nome: 'Bebidas', ativo:true})

//select * from categorias
use('estoque')
db.categorias.find()

// insert
use('estoque')
db.categorias.insertOne({_id:'123',
    nome:'Sobremesas',
    ativo: true
})

//select nome from categorias
use('estoque')
db.categorias.find({}, {nome:1})

//insersão de muitos dados
use('estoque')
db.categorias.insertMany([
    {nome:'Pães', ativo:true},
    {nome:'Entradas', ativo:true}
])

use('estoque')
db.produtos.insertOne({
    _id: '124',
    nome: 'Hambúrguer Gourmet',
    preco: 35.99,
    ingredientes:["pão","carne","queijo","alface","tomate"],
    vegetariano: false,
    dataCadastro: new Date(),
    calorias: {
        total: 780,
        porcoes:1
    }
})

use('estoque')
db.produtos.find()

use('estoque')
db.produtos.insertOne({abobrinha:"tem"})

//Drop table
use('estoque')
db.produtos.drop()

//Create Table Produtos
use('estoque')
db.createCollection('produtos',{
    validator:{
        $jsonSchema: {
            'bsonType' : 'object',
            'required' : ['_id','nome','preco','ingredientes', 'dataCadastro'
            ]
        }
    }
})

use('estoque')
db.produtos.insertOne({
    _id: '125',
    preco: 35.99,
    nome: 'Hambúrguer Podre',
    ingredientes:["pão","carne","queijo","alface","tomate"],
    vegetariano: false,
    dataCadastro: new Date(),
    calorias: {
        total: 780,
        porcoes:1
    }
})

use('estoque')
db.getCollectionInfos({name:"produtos"})


//mostrando a excessão
use('estoque')
try{
    db.produtos.insertOne({abobrinha:"tem"})
}catch (err){
    printjson(err)
}

use('estoque')
db.estados.insertMany([
    {sigla:'SP',nome:'São Paulo',populacao:100000000},
    {sigla:'AC', nome:'Acre',populacao:1200000},
    {sigla:'RJ',nome:'Rio de Janeiro',populacao:2500000}
])




/*expressões regulares
    i = insensitive case
    $ = que termine
    ^ = que inicie
*/

//Consultas

use('estoque')
db.estados.find({sigla:{$eq:"SP"}},{nome:1})

use('estoque')
db.estados.find({nome:/Paulo/},{nome:1})

use('estoque')
db.estados.find({populacao:{$lt:12000000}},{nome:1})

use('estoque')
db.estados.find({sigla:{$in:['AC','RJ']}},{nome:1})

use('estoque')
db.estados.find({
    $or:[
        {sigla:{$eq:'RJ'}},
        {sigla: {$eq:'SP'}}
    ]
    },
    {_id:0,sigla:1,nome:1}
)

//delete
use('estoque')
db.estados.deleteOne({sigla:'AC'})

use('estoque')
db.estados.deleteMany({nome:/o/i})

use('estoque')
db.estados.find()

//update

use('estoque')
db.estados.updateOne({sigla:{$eq: 'AC'}},
{$set:{populacao:1000}})


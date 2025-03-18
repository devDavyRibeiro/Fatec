use('estoque')
const usuarios = [
    {
        nome:'José',
        idade: 22,
        sexo: 'M',
        hobbies: ['surf','animes']
    },
    {
        nome: 'Maria',
        idade: 30,
        sexo:'F',
        hobbies: ['judô', 'volley']
    }
]

use('estoque')
db.usuarios.find()

use('estoque')
db.usuarios.insertMany(usuarios)

//set
use('estoque')
db.usuarios.updateOne({nome:{$eq:'Maria'}}, {$set:'Maria Silva'})

//$inc --> Para incrementar ou decrementar um valor

use('estoque')
db.usuarios.updateMany({},{$inc:{ idade:  +1 }})

//push --> adiciona um novo elemento de um array

use('estoque')
db.usuarios.updateOne({nome:'José'}, {$push:{hobbies:'Fotografia'}})

//pull --> remove elemento do array

use('estoque')
db.usuarios.updateOne({sexo:{$eq:'F'}},{$pull: {hobbies:'judô'}})
use('cinema')
db.filmes.insertOne({
    "titulo" : "Star Wars",
    "ano" : 1978,
    "diretor" : "George Lucas",
    "classificao" : "⭐⭐⭐⭐⭐",
    "tituloJp" : "スター・ウォーズ" 
})

use('cinema')
db.filmes.insertOne({
    "titulo" : "Star Wars 2",
    "ano" : 1978,
    "diretor" : "George Lucas",
    "classificao" : "⭐⭐"
})

// com select * from filmes
use("cinema")
db.filmes.find()

//select titulo, ano from filmes  
use("cinema")
db.filmes.find({}, {titulo: 1, ano: 1})


//select titulo, ano from filmes where ano = 1978  
use("cinema")
db.filmes.find({ano : 1978}, {titulo : 1, diretor: 1})
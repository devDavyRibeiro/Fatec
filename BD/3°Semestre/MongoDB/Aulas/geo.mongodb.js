use('estoque')
db.estados.find()
db.estados.find().forEach(function (estado) {
    db.estados.updateOne(
        {_id: estado._id},
        { $set : {
            local:{
                type:'Point',
                coordinates:[estado.longitude,estado.latitude]
            }
        },
        $unset: {latitude:"",longitude:""}
    }
    )
})


use('estoque')

db.estados.createIndex({local:'2dsphere'})


use('estoque')
db.estados.find({
    local:{
        $near: {
            $geometry:{
                type:'Point',
                cordinates:[-23.5313,-47.4495]
            },
            maxDistance:2000000
        }
    }
},{nome:1,_id:0}).count

use('estoque')
db.estados.find({
    local:{
        $geoWithin:{
            $centerSphere:[[-47.4495, -23.5313], 2000 / 6378.1]
        }
    }
},{nome:1})

use('estoque')
db.municios.find().forEach(function (municio) {
    db.municios.updateOne(
        {_id: municio._id},
        { $set : {
            local:{
                type:'Point',
                coordinates:[municio.longitude,municio.latitude]
            }
        },
        $unset: {latitude:'',longitude:''}
    }
    )
})

use('estoque')
db.municios.createIndex({local:'2dsphere'})
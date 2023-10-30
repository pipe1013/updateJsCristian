const mongoose = require('mongoose')

//Definir un modelo solo pra mongo 

const bootcampSchema = new mongoose.Schema ({
    name: {
        type: String,
        unique : true,
        required : [true , "El bootcam ya esta repetido" ],
        maxlength: [20 , "El nombre solo debe tener 20 caracteres"]
    },
    phone: {
        type: Number,
        required : [true , "El bootcam ya esta repetido" ],
        maxlength: [10 , "El nombre solo debe tener 10 caracteres"]
    },
    address: {
        type: String,
        required : [true , "Dirección requerida" ],
    },
    topics:{
        type:[String],
        enum:["AI" ,
              "Backend",
              "Frontend",
              "Devops"
            ]
    },
    averageRating: Number,
    createdAt:{
        type: Date,
        required: [true, "Debe ingresar fecha de creación"]
    }
})

const Bootcamp = mongoose.model("Bootcamp" , bootcampSchema)
module.exports = Bootcamp 

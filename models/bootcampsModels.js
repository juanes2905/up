const mongoose = require('mongoose')

// definir el modelo para bootcamps
const boostcampSchema = mongoose.Schema ({
    name: {
        type: String,
        unique :[true , "nombre del bootcamp debe ser unico "],
        require: [true ,  "nombre de bootcamp requerido"],
        maxlength: [50 , "longitud de nombre menor a 50"]
    },
    phone:{
        type: Number, 
        maxlength: [10 , "longitud de telefono menor a 10"] 
    },
    address:{
        type: String,
        requiered: [ true , "direccion requerida"]
    },
    topics:{
        type: [String],
        enum: [
            "AI",
            "Frontend/UX",
            "Backend",
            "DevOps"
        ]
    },
    averageRating: Number,
    createAt: Date  
})

module.exports = mongoose.model('Bootcamps' , 
boostcampSchema)
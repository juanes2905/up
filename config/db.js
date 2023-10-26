const mongoose = require ('mongoose')



async function conectDB(){
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/DEVCAMP-2687351-MASTER')
    console.log(`Conexion exitosa a mongo`.bgMagenta.blue)
}

module.exports = conectDB

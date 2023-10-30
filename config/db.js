const mongoose = require('mongoose')
const dotenv = require('dotenv')


// Función conexión

const conectarDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('MongoDB conectado...'.bgBlue.red)
}

//Exportación DB
module.exports = conectarDB



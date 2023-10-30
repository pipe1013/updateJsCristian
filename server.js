const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')
//Configurar variables de entorno
dotenv.config({
    path:'./config/.env'
})
// dependencias de ruta
const bootcampsRoutes = require('./routes/bootcampRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')
const usersRoutes = require('./routes/usersRoutes')

conectarDB()

// Construir el objeto app
const app = express()

app.use(express.json())

//vincular las rutas del proyecto
app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)
app.use('/reviews', reviewsRoutes)
app.use('/users', usersRoutes)


// Configurar variables de entorno
dotenv.config(
    { path: './config/.env'}
)

// Prueba de url
app.get('/prueba', function(req, res){
    res.send('Hola')
});

// Prueba de ruta parametrizada
app.get('/prueba/:id' , function(req , res){
    res.send(`parametro enviado: ${ req.params.id }`)
});

// Tomar variable puerto del puerto
const puerto = process.env.PUERTO

// Servidor de desarrollo
app.listen( puerto, function(){
    console.log(`Servidor ejecutando...${puerto}`.bgMagenta.yellow.inverse)
})







// Dependencia commonjs
const dotenv = require('dotenv')
const colors = require('colors')
const express = require('express')
//dependencia de rutas
const boostcampRoutes = require('./routes/bootcampRoutes.js')




//DEPENDENCIA A BASDE DE DATOS 
const conectDB = require('./config/db.js')




conectDB()

// Crear el objeto app

const app = express()
 
// express para recibir datos js
app.use(express.json())
//vincular las rutas de bootcamps
app.use('/api/v1/devcamp/bootcamps', boostcampRoutes)

// Primera prueba de URl del servidor 
app.get('/prueba', 
        function(request, response){
            response.send("Bienvenido")
});
// establecer archivo .env del proyecto




// Url de bootcamps
// Evidencia Urls para los cursos, para los reviews y para users

// Esta ruta trae todos los bootcamps por el motodo get

app.get('/api/v1/devcamp/bootcamps' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : "mostrar todos los boostcamps"
                })       
})


app.get('/api/v1/devcamp/bootcamps/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` seleccionando bootcamp con id ${request.params.id}`
                })       
})

// metodo post para crear

app.post('/api/v1/devcamp/bootcamps' ,
        (request, response) => {
            response
                .status(201)
                .json({
                    "sucess": true,
                    "msg" : "crear boostcamp"
                })       
})
// actulizar bootcamps por id
app.put('/api/v1/devcamp/bootcamps/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` actualizando bootcamp con id ${request.params.id}`
                })       
})
// eliminar bootcamps por id
app.delete('/api/v1/devcamp/bootcamps/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` eliminando bootcamp con id ${request.params.id}`
                })       
})

// Espacio para los courses

// Esta ruta trae todos los courses por el motodo get

app.get('/api/v1/devcamp/courses' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : "mostrar todos los cursos"
                })       
})
// Esta ruta trae todos los courses por el motodo get con el id
app.get('/api/v1/devcamp/courses/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` seleccionando los cursos con id ${request.params.id}`
                })       
})
// metodo post para crear

app.post('/api/v1/devcamp/courses' ,
        (request, response) => {
            response
                .status(201)
                .json({
                    "sucess": true,
                    "msg" : "crear cursos"
                })       
})

// actulizar courses por id
app.put('/api/v1/devcamp/courses/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` actualizando courses con id ${request.params.id}`
                })       
})
// eliminar courses por id
app.delete('/api/v1/devcamp/courses/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` eliminando courses con id ${request.params.id}`
                })       
})



// Espacio para las reviews

// Esta ruta trae todos los reviews por el motodo get

app.get('/api/v1/devcamp/reviews' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : "mostrar todos las reseñas"
                })       
})
// Esta ruta trae todos los reviews por el motodo get con el id
app.get('/api/v1/devcamp/reviews/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` seleccionando las reseñas con id ${request.params.id}`
                })       
})
// metodo post para crear

app.post('/api/v1/devcamp/reviews' ,
        (request, response) => {
            response
                .status(201)
                .json({
                    "sucess": true,
                    "msg" : "crear reseñas"
                })       
})

// actulizar reviews por id
app.put('/api/v1/devcamp/reviews/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` actualizando reseñas con id ${request.params.id}`
                })       
})
// eliminar reviews por id
app.delete('/api/v1/devcamp/reviews/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` eliminando reseñas con id ${request.params.id}`
                })       
})

// Espacio para las users

// Esta ruta trae todos los users por el motodo get

app.get('/api/v1/devcamp/users' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : "mostrar todos los usuarios"
                })       
})
// Esta ruta trae todos los users por el motodo get con el id
app.get('/api/v1/devcamp/users/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` seleccionando los usuarios con id ${request.params.id}`
                })       
})
// metodo post para crear

app.post('/api/v1/devcamp/users' ,
        (request, response) => {
            response
                .status(201)
                .json({
                    "sucess": true,
                    "msg" : "crear usuarios"
                })       
})

// actulizar users por id
app.put('/api/v1/devcamp/users/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` actualizando los usuarios con id ${request.params.id}`
                })       
})
// eliminar users por id
app.delete('/api/v1/devcamp/users/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` eliminando usuarios con id ${request.params.id}`
                })       
})

// Establcer un servidor con un puerto 


app.listen( 6000 ,
    console.log(`Servidor escuchando en el puerto: 6000` .bgBlue.red))
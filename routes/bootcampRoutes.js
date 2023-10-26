const express = require('express')
const bootcampsModels = require('../models/bootcampsModels')
const router = express.Router()

router.get('/' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : "mostrar todos los boostcamps"
                })       
})


router.get('/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` seleccionando bootcamp con id ${request.params.id}`
                })       
})

// metodo post para crear

router.post('/' ,
         (request, response) => {
     //crear el nuevo boostcamp
     //const boostcamp = bootcampModel.
       //                create( request.body )
            response
                .status(201)
                .json({
                    "sucess": true,
                    "data" : request.body
                })       
})
// actulizar bootcamps por id
router.put('/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` actualizando bootcamp con id ${request.params.id}`
                })       
})
// eliminar bootcamps por id
router.delete('/:id' ,
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

router.get('/api/v1/devcamp/courses' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : "mostrar todos los cursos"
                })       
})
// Esta ruta trae todos los courses por el motodo get con el id
router.get('/api/v1/devcamp/courses/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` seleccionando los cursos con id ${request.params.id}`
                })       
})
// metodo post para crear

router.post('/api/v1/devcamp/courses' ,
        (request, response) => {
            response
                .status(201)
                .json({
                    "sucess": true,
                    "msg" : "crear cursos"
                })       
})

// actulizar courses por id
router.put('/api/v1/devcamp/courses/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` actualizando courses con id ${request.params.id}`
                })       
})
// eliminar courses por id
router.delete('/api/v1/devcamp/courses/:id' ,
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

router.get('/api/v1/devcamp/reviews' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : "mostrar todos las reseñas"
                })       
})
// Esta ruta trae todos los reviews por el motodo get con el id
router.get('/api/v1/devcamp/reviews/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` seleccionando las reseñas con id ${request.params.id}`
                })       
})
// metodo post para crear

router.post('/api/v1/devcamp/reviews' ,
        (request, response) => {
            response
                .status(201)
                .json({
                    "sucess": true,
                    "msg" : "crear reseñas"
                })       
})

// actulizar reviews por id
router.put('/api/v1/devcamp/reviews/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` actualizando reseñas con id ${request.params.id}`
                })       
})
// eliminar reviews por id
router.delete('/api/v1/devcamp/reviews/:id' ,
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

router.get('/api/v1/devcamp/users' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : "mostrar todos los usuarios"
                })       
})
// Esta ruta trae todos los users por el motodo get con el id
router.get('/api/v1/devcamp/users/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` seleccionando los usuarios con id ${request.params.id}`
                })       
})
// metodo post para crear

router.post('/api/v1/devcamp/users' ,
        (request, response) => {
            response
                .status(201)
                .json({
                    "sucess": true,
                    "msg" : "crear usuarios"
                })       
})

// actulizar users por id
router.put('/api/v1/devcamp/users/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` actualizando los usuarios con id ${request.params.id}`
                })       
})
// eliminar users por id
router.delete('/api/v1/devcamp/users/:id' ,
        (request, response) => {
            response
                .status(200)
                .json({
                    "sucess": true,
                    "msg" : ` eliminando usuarios con id ${request.params.id}`
                })       
})


module.exports = router
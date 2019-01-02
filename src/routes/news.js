const express = require('express')
const api = express.Router()
const handler = require('../handler/handler')

api.get('/news', handler.mostrarTabla)
api.post('/ad', handler.enviarDatos)
    // esta ruta del delete , le habia puesto con el vervo delete pero tampoco me funca el video que mire lo hizo tipo asi con get no se por que.
api.get('/delete/:id', handler.borrarId)



module.exports = api
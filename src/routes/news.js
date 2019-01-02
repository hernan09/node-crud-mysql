const express = require('express')
const api = express.Router()
const handler = require('../handler/handler')

api.get('/news', handler.mostrarTabla)
api.post('/ad', handler.enviarDatos)
api.delete('/delete/:id', handler.borrarId)



module.exports = api
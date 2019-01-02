const express = require('express')
const api = express.Router()
const handler = require('../handler/handler')

api.get('/news', handler.mostrarTabla)
api.post('/ad', handler.enviarDatos)
api.get('/edit/:id', handler.edit)
api.post('/update/:id', handler.update)
api.get('/delete/:id', handler.borrarId)



module.exports = api
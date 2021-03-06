const express = require('express'),
  User = require('./routes/user'),//Archivo requerido de carpeta routes
  Publication= require('./routes/publication'),
  Comentario=require('./routes/comentario'),
  Reaccion=require('./routes/reaccion'),
  Perfil=require('./routes/perfil')
  api = express.Router()//El router de express

api.get('/', async (req, res) => {//Accede a la raiz de la api inicializada en otro lado
  await res.status(200).send({//Como no se sabe cuanto demorara se hara asincronicametnte
    message: 'Funcionando API RESTful de Red Social con Node.js y MongoDB.'//Tiene JSON
  })
})

api.post('/perfil',Perfil.postPerfil)
api.get('/perfil',Perfil.getPerfil)

api.post('/users', User.postUsers)//Metodos por los cuales se ejecutara
api.get('/users', User.getUsers)//Metodo get post put delete

api.get('/publications', Publication.getPublications)
api.post('/publication', Publication.postPublication)
api.get('/publication/:id', Publication.getPublication)
api.put('/publication/:id', Publication.putPublication)
api.delete('/publication/:id', Publication.deletePublication)

api.post('/reaccion',Reaccion.postReaccion)
api.get('/reaccion/:id',Reaccion.getReaccion)
api.delete('/reaccion/:id',Reaccion.deleteReaccion)
  
api.post('/comentario',Comentario.postComentario)
api.get('/comentario/:id',Comentario.getComentario)
api.delete('/comentario/:id',Comentario.deleteComentario)
module.exports = api//Exportar el router

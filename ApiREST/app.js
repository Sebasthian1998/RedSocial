const express = require('express'),
  config = require('./config'), //Requiere archivo
  multer = require('multer'),//Requerir la libreria
  upload = multer(),//Se crea, inicializa el paquete
  app = express(), //Inicializa express
  router = require('./router')//Llamar el router

app
  .set('port', process.env.PORT)//Eñ puerta varia produccion desarrollo, SET, asigna el puerto con esa va
    //Variable process.env.PORT
  //para parsear application/json
  .use(express.json())//Informacion en formato JSON, salida de info
  //para parsear application/xwww-form-urlencoded
  .use(express.urlencoded({ extended: false }))//Todas las peticiones de manera correcta
  //para parsear multipart/form-data
  .use(upload.array())
  .use((req, res, next) => { //Middelware
    //https://enable-cors.org/
    res.header('Access-Control-Allow-Origin', '*')//Activar los cors, este y el de abajo
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')//Para que la api sea restfull
    next()    //Para acceder a los verbos del protocolo http
  })
  .use('/api', router)//El home de la aplicacion sera este

module.exports = app

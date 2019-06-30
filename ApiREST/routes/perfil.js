const Perfil = require('../models/perfil'),//Requiere el modelo
     apiResponse = (req, res, err, data) => {  //Una funcion que va a solicitar varios datos
    //Requerira la peticion la respuesta posible error y los datos
    if (err) {    //LO QUE HACE es refactorizar en cada peticion se realizara lo mismo practicamente
    res.status(500).send({
        message: `Error interno del servidor. ${err.message}`
        })
    } else {
        if (data) {
            res.status(200).send({ data })
        }else {
            res.status(404).send({
            message: `No existen datos en el API con tus parámetros de búsqueda.`
            })
        }
    }
}


const postPerfil = async (req, res) => {//Funcion asincrona, se debe esperar respuesta del servicio
  let perfil = new Perfil(req.body)//Nuevo objeto en moongose, con esos parametros
  await perfil.save((err, data) => apiResponse(req, res, err, data))//Guarda los datos en la bd
                  //Ejecuta una callback, la cual con 2 parametros mandamos a apiResponse
}

const getPerfil = async (req, res) => {
  await Perfil.find({}).exec((err, data) => {//Se ejecuta en el modelo creado, const User
    if (err) {                              //Si se quiere ejecutar una callback despues de ese find se pone exec
      res.status(500).send({
        message: `Error interno del servidor. ${err.message}`
      })
    } else {
      if (data) {
        res.status(200).send({ data }) //Sino enviamos la data con .send
      } else {
        res.status(404).send({
          message: `No existen países en el API`//Si es que no se cargan los datos
        })
      }
    }
  })
}


module.exports = {//Exporta 
  postPerfil,
  getPerfil
}

const User = require('../models/user'),//Requiere el modelo
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

const postUsers = async (req, res) => {//Funcion asincrona, se debe esperar respuesta del servicio
  let users = new User(req.body)//Nuevo objeto en moongose, con esos parametros
  await users.save((err, data) => apiResponse(req, res, err, data))//Guarda los datos en la bd
                  //Ejecuta una callback, la cual con 2 parametros mandamos a apiResponse
}

const getUsers = async (req, res) => {
  await User.find({}).populate('perfil').exec((err, data) => {//Se ejecuta en el modelo creado, const User
    if (err) {                              //Si se quiere ejecutar una callback despues de ese find se pone exec
      res.status(500).send({
        message: `Error interno del servidor. ${err.message}`
      })
    } else {
      if (data) {
        res.status(200).send({ data }) //Sino enviamos la data con .send
      } else {
        res.status(404).send({
          message: `No existen personas en el API`//Si es que no se cargan los datos
        })
      }
    }
  })
}
// const getUser = async (req, res) => {
//   await User
//     .findById(req.params.id) //Le pasara el id a buscar, solo 1
//     .exec((err, data) => apiResponse(req, res, err, data)) //Ejecutara la callback
// }

module.exports = {//Exporta 
  postUsers,
  getUsers
}

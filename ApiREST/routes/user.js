const User = require('../models/user'),//Requiere el modelo
  fs = require('fs')//Para leer archivos en node filesistem


const postUsers = async (req, res) => {//Funcion asincrona, se debe esperar respuesta del servicio
  const users = JSON.parse(fs.readFileSync('./models/countries.json', 'utf-8'))//Lo parseamos para que se convierta en objeto JS
                                    //Luego la direccion del archivo, y codificar en utf-8
  await User.insertMany(users, (err, data) => { //archivo, todos los metodos de mongoose ejecutan callback
    if (err) {//Nos envia una respuesta con res
      res.status(500).send({//Esto se mandara en formato json la respuesta mediante el metodo send
        message: `Error interno del servidor. ${err.message}`
      })
    } else {
      res.status(200).send({ data })//Seria data.data tambien
    }
  })
}

const getUsers = async (req, res) => {
  await User.find({}).exec((err, data) => {//Se ejecuta en el modelo creado, const User
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
  postUsers,
  getUsers
}

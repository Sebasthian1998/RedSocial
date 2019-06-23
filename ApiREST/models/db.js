const c = console.log,
  mongoose = require('mongoose'),//Requiere el modulo
  config = require('../config')

class Database { //Crea una clase
  constructor() {
    this.connect() //En el constructor ira la funcion de abajo
  }

  connect() {
    mongoose.connect(process.env.URL_DB, { useNewUrlParser: true })//Esto devuelve una promesa
      .then(() => c(`Conexión exitosa al servidor de MongoDB: ${process.env.URL_DB}`))
      .catch(err => c(`Error de conexión al servidor de BD: ${err.message}`))
  }
}

module.exports = new Database()

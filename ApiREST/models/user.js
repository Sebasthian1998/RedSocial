//http://peric.github.io/GetCountries/

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  UserSchema = new Schema({
    name: {
      type: String,
      required: [true, 'El nombre del usuario es requerido'],
    },
    password: {
      type: String,
      required: [true, 'La contraseña del usuario es requerido'],
      //unique: true //Para que sea unico
    }
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('User', UserSchema)

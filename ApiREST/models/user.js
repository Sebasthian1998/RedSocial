

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  UserSchema = new Schema({
    name: {
      type: String,
      required: [true, 'El nombre del usuario es requerido'],
    },
    perfil:{
      type:Schema.Types.ObjectId,
      ref:'Perfil',
      required:[true,'El perfil es requerido']
  },
    password: {
      type: String,
      required: [true, 'La contraseña del usuario es requerido'],
      //unique: true //Para que sea unico
    },
    photo:{
      type: String,
      required: [true, 'La foto es requerido']
    },
    phone:{
      type: String
    }
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('User', UserSchema)

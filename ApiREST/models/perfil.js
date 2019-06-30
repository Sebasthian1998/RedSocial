
const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  PerfilSchema = new Schema({
    perfil: {
      type: String,
      enum: ['Alumno', 'Docente'],
      required: [true, 'El perfil es requerido'],
      default:''
    },
    numero:{
     type: Number
    }
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('Perfil', PerfilSchema)
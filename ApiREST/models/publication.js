const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  PublicationSchema = new Schema({ //Se crea de esta manera
    user: {
      type: Schema.Types.ObjectId,//Relacion entre paises y marathon
      ref: 'User',//A que coleccion hara referencia, el modelo se llama Country
      required: [true, 'El país donde se realiza el maratón es requerido']
    },
    description: {
      type: String,
      required: [true, 'La descripcion de la publicacion es requerida']
    },
    comentarios: String,
    reaccion: String,
    race_type: {
      type: String,
      enum: ['City', 'Trail'],
      default: 'City'
    }
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('Publication', PublicationSchema)//Nombre tabla y schema
//El nombre va en mayuscula, la coleccion real en mongodb se llamara marathons

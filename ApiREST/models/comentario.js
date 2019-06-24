const moongose=require('mongoose')
Schema=moongose.Schema,
ComentarioSchema= new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'El usuario debe ser requerido']
    },
    reaccion:{
        type:Schema.Types.ObjectId,
        ref:'Reaccion'
    },
    comentario:{
        type: String,
        required:[true, 'La reaccion de la publicacion es requerida'],
        enum: ['Like', 'Dislike'],
        default:''
    }    
})
module.exports=moongose.model('Comentario',ComentarioSchema)
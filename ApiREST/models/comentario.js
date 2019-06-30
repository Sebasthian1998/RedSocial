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
    publication:{
        type:Schema.Types.ObjectId,
        ref:'Publication',
        required:[true,'La publicacion es requerida']

    },
    comentario:{
        type: String,
        required:[true, 'La reaccion de la publicacion es requerida'],
        default:''
    }    
})
module.exports=moongose.model('Comentario',ComentarioSchema)
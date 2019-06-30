const moongose=require('mongoose')
Schema=moongose.Schema,
ReaccionSchema= new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'El usuario debe ser requerido']
    },
    reaccion:{
        type: String,
        required:[true, 'La reaccion de la publicacion es requerida'],
        enum: ['Like', 'Dislike'],
        default:''
    }
})



module.exports=moongose.model('Reaccion',ReaccionSchema)
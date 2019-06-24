const Reaccion= require('../models/reaccion'),
  c = console.log

const apiResponse = (req, res, err, data) => {//Una funcion que va a solicitar varios datos
            //Requerira la peticion la respuesta posible error y los datos
  if (err) {    //LO QUE HACE es refactorizar en cada peticion se realizara lo mismo practicamente
    res.status(500).send({
      message: `Error interno del servidor. ${err.message}`
    })
  } else {
    if (data) {
      res.status(200).send({ data })
    } else {
      res.status(404).send({
        message: `No existen datos en el API con tus parámetros de búsqueda.`
      })
    }
  }
}
const postReaccion = async (req, res) => {
    let reaccion = new Reaccion(req.body)//Nuevo objeto en moongose, con esos parametros
    c(req.body)
    await reaccion.save((err, data) => apiResponse(req, res, err, data))//Guarda los datos en la bd
                    //Ejecuta una callback, la cual con 2 parametros mandamos a apiResponse
  }
  
const getReaccion = async (req, res) => {
    await Reaccion
      .findById(req.params.id) //Le pasara el id a buscar, solo 1
      .exec((err, data) => apiResponse(req, res, err, data)) //Ejecutara la callback
}
const deleteReaccion = async (req, res) => {
    await Reaccion.findByIdAndRemove(
      req.params.id,
      (err, data) => apiResponse(req, res, err, data)//Este se ejecuta dentro del metodo
    )
}


module.exports = {
    postReaccion,
    getReaccion,
    deleteReaccion
  }
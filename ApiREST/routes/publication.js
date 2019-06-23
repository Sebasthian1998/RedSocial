const Publication = require('../models/publication'),
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
//Todas son funciones asincronas
const getPublications = async (req, res) => {
  await Publication
    .find({})
    .populate('user', 'name')//Para que traiga el nombre del pais, te lleva el subdocumento
    .sort({ '_id': -1 })//Del mas reciente al mas viejo
    .exec((err, data) => apiResponse(req, res, err, data))//Ejecuta la callback de find
}

const postPublication = async (req, res) => {
  let publication = new Publication(req.body)//Nuevo objeto en moongose, con esos parametros
  c(req.body)
  await publication.save((err, data) => apiResponse(req, res, err, data))//Guarda los datos en la bd
                  //Ejecuta una callback, la cual con 2 parametros mandamos a apiResponse
}

const getPublication = async (req, res) => {
  await Publication
    .findById(req.params.id) //Le pasara el id a buscar, solo 1
    .exec((err, data) => apiResponse(req, res, err, data)) //Ejecutara la callback
}

const putPublication = async (req, res) => {
  await Publication.findByIdAndUpdate(  //Se llama a esta funcion, recibe el id a buscar y el body a reemplazar
    req.params.id,
    req.body,
    { new: true },//Los datos anteriores a la actualizacion
    (err, data) => apiResponse(req, res, err, data)//
  )
}

const deletePublication = async (req, res) => {
  await Publication.findByIdAndRemove(
    req.params.id,
    (err, data) => apiResponse(req, res, err, data)//Este se ejecuta dentro del metodo
  )
}

module.exports = {
  getPublications, //Exporta cada funcion
  postPublication,
  getPublication,
  putPublication,
  deletePublication
}

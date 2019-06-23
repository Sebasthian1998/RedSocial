process.env.NODE_ENV = process.env.NODE_ENV || 'dev' //Son variables globales de porsi
process.env.PORT = process.env.PORT || 3000 //Para detectar el entorno desarrollo, produccion
//Heroku tiene su propio env.NODE_ENV , pero manualmente asigna 'dev'
//Heroku tiene su propio env.NODE_PORT , pero manualmente asigna 3000
if (process.env.NODE_ENV === 'dev') {
  process.env.URL_DB = 'mongodb+srv://UserSebas:Eulogio1@base-de-datos-en-mongodb-ed8xm.mongodb.net/test?retryWrites=true&w=majority'
} else {
  process.env.URL_DB = 'mongodb://edteam:edteam2018@ds235418.mlab.com:35418/edmaratones'
}

const c = console.log,
  app = require('./app'),
  db = require('./models/db')

app.listen(
  app.get('port'),//Obtiene el puerto, obtiene el puerto de app con GET
  () => c(`Iniciando API RESTful en el puerto ${app.get('port')}`)
)

c(
  '***** VARIABLES DE ENTORNO *****\n',
  process.env.NODE_ENV, //Son constantes, informacion de la aplicacion pc etc
  '\n',
  process.env.URL_DB,
  '\n',
  process.env.PORT,
  '\n***** VARIABLES DE ENTORNO *****'
)

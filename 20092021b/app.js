//creacion de servidor
var express = require('express')
global.app = express()
global.config = require(__dirname + '/config.js').config
global.path = require('path')
global.appRoot = path.resolve(__dirname)
// otra forma de hacerlo: 
//global.appRoot = require('path').resolve(__dirname)


//conexion a rutas.js
require('./routes/rutas.js')

//exponer nuestro aplicativo del lado del frontend
app.use('/',express.static(__dirname + '/Pagina'))
app.use('/Imagenes',express.static(__dirname + '/Imagenes'))
	
app.listen(config.puerto,function(){    
      console.log('Servidor iniciado por el puerto ' + config.puerto)
})


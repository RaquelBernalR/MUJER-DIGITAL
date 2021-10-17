var express = requiere('express')
global.app = express()
const port = 3000;
global.config = requiere(_dirname +'/config.js').config


var datos =[];

requiere('/routes/rutas.js')

//exponer nuestro aplicativo del lado del frontend
app.use('/',express.static(_dirname + '/pagina'))
app.use('/imagenes',express.static(_dirname + '/imagenes'))


app.listen(config.puerto,function(){
    console.log('servidor funcionando en el puerto: ' + config.puerto)
}
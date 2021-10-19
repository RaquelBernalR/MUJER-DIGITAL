var express = require('express')
var app = express()
const port = 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var datos = [];

app.get('/home',function(request,response){
    response.send('<h1>hola estas en el home</h1>')
})

app.get('/sumar/:a/:b',function(request,response){
    var dato1 = parseInt(request.params.a);
    var dato2 = parseInt(request.params.b);
    response.send('<div>' + (dato1 + dato2) + '</div>')
})

app.post('/activarusuario',function(request,response){
    var email = request.body.email
    console.log(email)
    response.json({correo:email})
})


app.post('/guardar',function(request,response){
    
    var persona = {
        nombre:request.body.nombre,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono
    }

    if(persona.nombre == "" || persona.nombre == undefined || persona.nombre == null){
        response.json({state:false,mensaje:'El campo nombre es obligatorio'})
        return false;
    }


    if(persona.apellidos == "" || persona.apellidos == undefined || persona.apellidos == null){
        response.json({state:false,mensaje:'El campo apellidos es obligatorio'})
        return false;
    }

    if(persona.direccion == "" || persona.direccion == undefined || persona.direccion == null){
        response.json({state:false,mensaje:'El campo direccion es obligatorio'})
        return false;
    }

    datos.push({nombre:persona.nombre,apellidos:persona.apellidos,direccion:persona.direccion,telefono:persona.telefono})
    response.json({state:true,mensaje:'campos correctos',info:datos})


})


app.post('/crearorden',function(request,response){
    
    console.log(request.body)
    response.json({state:'ok',info:request.body})
})
//otra forma de codigo para esta function, se incluyen 2 parametros y se genera algo
// app.post('activarusuario',(request,response) => {
    
// })




//exponer nuestro aplicativo del lado del frontend
app.use('/',express.static(__dirname + '/Pagina'))
app.use('/Imagenes',express.static(__dirname + '/Imagenes'))
	
app.listen(port,function(){    
      console.log('Servidor iniciado por el puerto ' + port)
})
//Funcionalidad de peticiones post
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var matematicas = require(appRoot + '/api/controladores/matematicasControllers.js').matematicas

//peticiones get - enrutamientos matematicas
app.get('/restar',function(request,response){
    matematicas.restar(request,response)
})


app.get('/sumar/:a/:b',function(request,response){
    matematicas.sumar(request,response)
})


var usuarios = require(appRoot + '/api/controladores/usuariosControllers.js').usuarios

//peticiones post
app.post('/activarusuario',function(request,response){
   usuarios.activarusuario(request,response)
})

app.post('/guardar',function(request,response){
    usuarios.guardar(request,response)
    })

app.post('/crearorden',function(request,response){
    usuarios.crearorden(request,response)
    })
// app.post('/borrar',function(request,response){
//     usuarios.borrar(request,response)
// })
// app.post('/editar',function(request,response){
//     usuarios.editar(request,response)
// })
// app.post('/listar',function(request,response){
//     usuarios.listar(request,response)
// })
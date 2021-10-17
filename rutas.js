var bodyparser = requiere



var matematicas = requiere(appRoot + '/api/controladores/matematicasController.js') .matematicas

app.get('/restar',function(request,response){
  matematicas.restar(request,response)
})

app.get('/sumar/:a/:b',function(request,response){
    matematicas.sumar(request,response)
})


app.post('/activarusuario',function(request,response){

})

app.post('/guardar',function(request,response){

})

app.post('/crearorden',function(request,response){

})

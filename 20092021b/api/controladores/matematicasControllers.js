var matematicasControllers = {}


matematicasControllers.restar = function(request,response){
    response.send('Esta es una pagina para hacer restas')
}

matematicasControllers.sumar= function(request,response){
    var dato1 = parseInt(request.params.a);
    var dato2 = parseInt(request.params.b);
    response.send('<div>' + (dato1 + dato2) + '</div>')
    
}
module.exports.matematicas = matematicasControllers
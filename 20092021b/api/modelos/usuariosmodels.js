var usuariosmodels= {}

var datos = []

usuariosmodels.guardar = function(post,callback){

    datos.push(
    {
        nombre:post.nombre
        ,apellidos:post.apellidos
        ,direccion:post.direccion
        ,telefono:post.telefono
    })
    
    return callback({state:true,info:datos})
}
usuariosmodels.activarusuario = function(post,callback){


    return callback({})
}   
usuariosmodels.crearorden = function(post,callback){


    return callback({state:'ok',info:post.body})
}   

module.exports.usuarios = usuariosmodels;
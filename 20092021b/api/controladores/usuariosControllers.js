var usuariosmodels = require(appRoot + '/api/modelos/usuariosmodels.js').usuarios

var usuariosControllers = {}



//Eventos  o funcionalidades
usuariosControllers.activarusuario = function(request,response){
    var email = request.body.email
    console.log(email)
    
}

usuariosControllers.guardar = function(request,response){   
    var persona = {
        nombre:request.body.nombre,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono
    }
    console.log('------------------request')
    console.log(persona)
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


usuariosmodels.guardar(persona,function(respuesta){
    console.log('-------------------response')
    console.log(respuesta)
    response.json(respuesta)
})    
}
// validaciones ok
//datos.push({nombre:persona.nombre,apellidos:persona.apellidos,direccion:persona.direccion,telefono:persona.telefono})  
//response.json({state:true,mensaje:'campos correctos',info:datos})  
//}

usuariosControllers.crearorden = function(request,response){
   
  //  usuariosmodels.crearorden(request,function(respuesta){
  //      response.json(respuesta)
  //  })
   
    var items = request.body;

    var conerrores = 0;
    var mensajes  = []; 

    for (let index = 0; index < items.length; index ++) {

        console.log('-----------------revisando ')
         console.log(items[index])
                
        if  (items[index].cantidad <= 0 ){
            conerrores = conerrores  +   1
            mensaje.push({error:'la cantidad del item ' + (index) + ' no puede tener el valor' + items[index].id})
        }
        
        if (items[index].id <= 0){
            conerrores = conerrores  +   1
            mensaje.push({error:'la cantidad del item ' + (index) + ' no puede tener el valor' + items[index].id}) 
        }
        

        if (index == items.length  - 1){
            if (conerrores > 0){
                
            }
        }  
    }

}
//SE CAMBIA POR usuariosmodels...ver 2 lineas arriba    
//console.log(request.body)
//response.json({state:'ok',info:request.body})
module.exports.usuarios = usuariosControllers
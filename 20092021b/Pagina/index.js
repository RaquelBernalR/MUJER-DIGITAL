//mis variables

var misproductos = [
    {id:1,cantidad:'100', nombre: 'papitas', valor: 3000},
    {id:2,cantidad:'50', nombre: 'jugo', valor: 2000},
    {id:3,cantidad:'50', nombre: 'chicles', valor: 1000},
]
var carrito  = [];


//creamos los productos
var GuardarProducto = function () {
    var nombre = document.getElementById('nombre').value
    var cantidad = document.getElementById('cantidad').value
    misproductos.push({cantidad:cantidad,nombre:nombre,valor:3000})
    console.log(misproductos)
}
//muestra las unidades existentes en el carrito
var analizarcarrito= function() {

    console.log(localStorage.getItem('carrito'))
    if(localStorage.getItem('carrito') !=null){
        carrito =JSON.parse(localStorage.getItem('carrito'))
        console.log(carrito)
        document.getElementById('micarrito').innerHTML = carrito.length
    }

}
//metodo o function para agregar items  
//recibe un id, es el id del producto
var agregarcarrito = function(id) {
    console.log(id)
    //carrito.push({id:id})

    if(carrito.length == 0){
        carrito.push({id:id,cantidad:1})
        console.log(carrito)
    }
    else{

        var posicion = carrito.findIndex((elemento) => elemento.id == id)

        if(posicion == -1 ){
           carrito.push({id:id,cantidad:1})
        }
        else
        {
            carrito(posicion).cantidad = carrito(posicion).cantidad + 1
        }

        console.log(carrito)
    }

    localStorage.getItem('carrito',JSON.stringify(carrito))


}
//muestra los productos disponibles para agregar al carrito
var mostrarmisproductos = function(){
    for(const iterator of misproductos) {

        var contenido =
        '<div class="miitem">'+
        '<img src="./Imagenes/gato.jpg" class="logoproducto">' +
        '<div class="btnagregar" onclick="agregarcarrito(' + iterator.id + ')" > Agregar</div>' +
        '</div>'

        document.getElementById("zonadeactualizacion").innerHTML += contenido

    }

}

//funcionalidades huerfanas o por fuera de las funciones de js   
analizarcarrito()
mostrarmisproductos()
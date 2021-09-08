var valor1 = ""
var minumero = 212
var bouleano = true

var persona = {

    nombre :"Raquel",
    apellido :"Bernal",
    edad :46,
    status :true,
    estudios:{
        universidad:""
    }
}

var misitems = [0,1,2,3,4]

var pedido = {
    cliente: "Raquel Bernal",
    items:[
        {codigo:"001" ,nombre:"papitas" ,cantidad:2},
        {codigo:"002" ,nombre:"gaseosa" ,cantidad:1}
    ]


}

//funciones sin parametros

var filtro = "cantidad"
console.log(pedido.items[1].nombre)

var sumar = function(){
    return (5+8)
}
console.log (sumar() * sumar())
var sumar = () =>{
    var x= 5
    return (x+8)
}
console.log (sumar() + sumar())
function sumar(){
    return (5+8)
}
console.log (sumar() - sumar())

//funciones con parametros

var sumar= function(a,b,c){
    console.log (a)
    console.log (b)
    return (a+b+c)
}

//area de un triangulo  = a x b / 2
//area de un cuadrado = a x b

console.log(sumar(2,3,6)* sumar(1,2,4))
var calculararea =function (a,b,c =2){
if (c==2){
    console.log ('calculando area de triangulo')
    return a * b / c
}
if (c==0){
    console.log ('calculando area de cuadrado')
    return a * b
}
if (c==4){
    console.log ('calculando area de triangulo partido a la mitad')
    return a * b / c
}
}   
console.log(calculararea(2,8))
console.log(calculararea(2,8,0))
console.log(calculararea(2,8,4))
var enviarmonedas = function(nombre,_genero="I",status=true){
    if (status == true){
       console.log(nombre+'+500 monedas')     
    }
    if (status == false){
        console.log(nombre+'+50 monedas')     
     }
}

enviarmonedas('Raquel')
enviarmonedas('Luisa',false)
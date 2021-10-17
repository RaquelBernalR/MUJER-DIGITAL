 var datos = [(id:1),(id:2),(id:3)]
 var generos =["F","M","i"]
 var generos=
  generos.push(a)
  generos.push(b)
  generos.push(c)
  //o usar
  generos.push({id:"a",age:35,estado:true})
  generos.push({id:"b",age:34,estado:false})
  generos.push({id:"c",age:36,estado:true})
//pop elimina el ultimo registro
//generos.pop()
   //metodos de busqueda
//reverse se usa para invertir el orden de un array
//generos.reverse()

//console.log(generos.join())
console.log(generos)

var datos=["a","b","c"]

var datos=[]
datos.push("a")
datos.push("b")
datos.push("c")

var datos1=[]
datos.push("d")
datos.push("e")
datos.push("f")
//separa cada elemento del array con un caracter |
//datos.join('|')
//console.log(generos.join('|'))
//el .length sirve para ver cuantos registros tengo
//var x = datos.length
//console.log(x)
//console.log(datos.length())

//sirve para buscar elementos dentro de un array y devuelve true si existe
//datos.includes("x")

//console.log(datos.includes("x")
//datos.indexof me permite buscar en un array y me devuelve la posicion en donde la encuentra
//datos.indexof('a)
//console.log(datos)
//console.log(datos.indexof('2'))

//.isArray permite identificar si lo que estoy buscando es un array y me devuelve true si es un array
//var x = Array.isArray(datos)

//el fill sirve para reemplazar toda la informacion de cada elemento del aarray
//datos.fill("")

//.concat permite unir o concatenar dos tipos de array
//var resultado = datos.concat(datos1)

//console.log(resultado)

//.unshift permite colocor a al inicio y .push para agragarlo al final
//datos.unshift("a")
//datos.push("a")

//.slice arroja un grupo de datos con para metros desde posicion y numero de elemtos
//datos.slice(0,2) posicion desde donde quiere mostrar y numero de elementos desde esa posicion
//console.log(datos.slice(0,2))


//.splice es para liminar elementos con posicion de inicio y numero de registros a eliminar
//datos.splice(0,2)
//PARA listar datos
console.log(datos)

//con datos. puedes observar las opciones que hay
//.toscring convertir array a cadena de texto????investiga

var a = 1
var b = 2
// = asignacion de valores comparacion debe ser == o ===

//false
if(a == b){
  
    //aqui no se va a ejecutar por que la condicion es falsa, ejecutara a partir de los corchetes en adelante
    //si fuere verdadero este se ejcutaria y no el else
}
else{
    //este se ejecutaria
}
if(a == b && c == d){
    //se ejecuta si ambas son verdaderas sino se realiza else
    console.log(datos)
}
else{
    //se ejecuta si alguna de la 2 condiciones es falsa
}

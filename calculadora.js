<script>

   <h1 style="color: Pink;" > Calculadora básica</h1>
   
    var número1 = 0;
    
    var número2 = 0;

    var suma = function(){
    console.log (número1 + número2).value
    }

    var resta = function(){
    console.log (número1 - número2).value
    }
    
    var multiplica = function(){
    console.log (número1 * número2).value
    }
    
    var divide = function(){
    console.log (número1 / número2).value
    }
    Double resultado=0.0;
    String respuesta;

    if (signo.equals("-")) {
    resultado=Double.parseDouble(número1)-Double.parseDouble(número2)
    }

    if (signo.equals("+")) {
    resultado=Double.parseDouble(número1)+Double.parseDouble(número2)
    }

    if (signo.equals("*")) {
    resultado=Double.parseDouble(número1)*Double.parseDouble(número2)
    }

    if (signo.equals("/")) {
    resultado=Double.parseDouble(número1)/Double.parseDouble(número2) 
    }

    respuesta=resultado.toString();
    return respuesta;

 </script>
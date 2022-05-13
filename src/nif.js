export const nif = (dni)=>{
    var numero
    var letr
    var letra
    var expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
          return "dni incorrecto letra erronea"
        //alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
         //alert('Dni correcto');
         return true
       }
    }else{
        return "formato no valido"
      //alert('Dni erroneo, formato no válido');
     }
  }
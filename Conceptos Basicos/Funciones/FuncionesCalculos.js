
function stringValido(string, largo){
    if (string == null || string == undefined){
    return false;
    }
    if (largo && string.trim().length < largo){
    return false;
    }
    return true;
  }
function fechaValida(fecha,minimaFecha){
  if (fecha == null || fecha == undefined){
    return false;
}
if (minimaFecha && fecha.getTime() < minimaFecha.getTime()){
return false;
}
return true;
}
function eventoValido(evento){
if (evento == null || evento == undefined){
return false;
}
return (
stringValido(evento.nombre, 3) &&
stringValido(evento.descripcion, 10) &&
fechaValida(evento.fecha, new Date(2018,0,1,0,0,0))
)
}
var evento = {
nombre: "Evento 1",
descripcion: "Esto es una descripción",
fecha: new Date(2018,10,1)
};
document.write(eventoValido(evento));
//document.write("<br/>hola");
function maximo(donaciones){
  var max = 0;
  for (monto of donaciones){
      if (monto > max){
          max = monto;
      }
  }
  return max;
}

function minimo(donaciones){
  var min = 1000;
  for (monto of donaciones){
      if (monto < min){
          min = monto;
      }
  }
  return min;
}

function promedio(min, max,donaciones){
  var sum = 0;
  var cantidad = 0;
  for (monto of donaciones){
      if (monto > min && monto < max){
          sum += monto;
          cantidad++;
      }
  }
  return sum/cantidad;
}

var donaciones = [5,15,22,25,30,52,5,1,0];
var min = minimo(donaciones);
var max = maximo(donaciones);
document.write("  min= "+min);
document.write(" max= "+max);
document.write("  promedio= "+promedio(min, max, donaciones));

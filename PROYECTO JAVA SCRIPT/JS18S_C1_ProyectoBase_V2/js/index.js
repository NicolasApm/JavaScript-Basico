// Hemos omitido los acentos en los comentarios por compatibilidad
//Define las variables que necesites

var hoy;
var eventos;
var html= ""
var contenidoPas =[];
var contenidoProx=[];
var pasados  = [];
var proximos = [];

$(document).ready(function () {
  var value=0;
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
  hoy =resultado.fechaActual;
  eventos=resultado.eventos;
  for (var iterator of eventos) {
      if (iterator.fecha < hoy) {
          value +=1;
          pasados.push(iterator);    
      } 
      if (iterator.fecha > hoy) {
          value +=1;
          proximos.push(iterator);  
      }
  } 
  pasados = pasados.sort(function(x,y){
    if (x.fecha <= y.fecha){
      return 1;
    }
    return -1;
  });
  proximos = proximos.sort(function(x,y){
    if (x.fecha <= y.fecha){
      return 1;
    }
    return -1;
  });
  for(var j = 0; j < 2; j++){
  contenidoPas.push(`<h2>${pasados[j].nombre}</h2>
                    <p>${pasados[j].fecha}</p>
                    <p>Descripción: ${pasados[j].descripcion}</p>
                    `);
  contenidoProx.push(`<h2>${proximos[j].nombre}</h2>
                    <p>${proximos[j].fecha}</p>
                    <p>Descripción: ${proximos[j].descripcion}</p>
                    `);
           try {
                  var detallespas=document.getElementById("pasados"+j);
                  detallespas.innerHTML=contenidoPas[j];
                  var detallespro=document.getElementById("proximos"+j);
                  detallespro.innerHTML=contenidoProx[j];
                } catch (error) {
                   alert("indice por fuera de rango");
                }
    } 
  })
});
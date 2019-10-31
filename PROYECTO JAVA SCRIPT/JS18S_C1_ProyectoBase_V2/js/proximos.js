// Hemos omitido los acentos en los comentarios por compatibilidad
var hoy;
var eventos;
var html = ""
var contenidoProx=[];
var detallespro=[];
var newcontent=[];
var proximos = [];

$(document).ready(function () {

  var value=0;
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
  hoy =resultado.fechaActual;
  eventos=resultado.eventos;

  for (var iterator of eventos) {
      if (iterator.fecha > hoy) {
          proximos.push(iterator);
      }
  } 
  proximos = proximos.sort(function(x,y){
    if (x.fecha <= y.fecha){
      return 1;
    }
    return -1;
  });
  const ElementDiv = document.querySelectorAll('.event');
  for(var j = 0; j < proximos.length; j++){
    newcontent.push( `<h2>${proximos[j].nombre}</h2>
                      <p>${proximos[j].fecha} - ${proximos[j].lugar}</p>
                      <p>Descripción: ${proximos[j].descripcion}</p>
                      <p>Precio: ${proximos[j].precio}</p>
                      <p>invitados: ${proximos[j].invitados}</p>
                    `);
  contenidoProx.push(`<h2>${proximos[j].nombre}</h2>
                      <p>${proximos[j].fecha} - ${proximos[j].lugar}</p>
                      <p>Descripción: ${proximos[j].descripcion}</p>
                      <p>Precio: ${proximos[j].precio}</p>
                    `);                                     
           try {
                  detallespro[j]=document.getElementById("proximos"+j);
                  detallespro[j].innerHTML=contenidoProx[j];
                } catch (error) {
                 alert("indice por fuera de rango");
                }
    }       
    for (let i = 0; i < ElementDiv.length; i++) {
      limpiar[i]=document.getElementById("cont"+i);
      ElementDiv[i].addEventListener("click", function() {
      switch (ElementDiv[i].id) {
        case "proximos0":
              detallespro[i].innerHTML=newcontent[i];   
              limpiar(i);
              reiniciar(i);
        break;
        case "proximos1":
              detallespro[i].innerHTML=newcontent[i];;
              limpiar(i);
              reiniciar(i);
        break;
        case "proximos2":
              detallespro[i].innerHTML=newcontent[i];
              limpiar(i);
              reiniciar(i);
        break; 
        case "proximos3":
              detallespro[i].innerHTML=newcontent[i];;
              limpiar(i);
              reiniciar(i);
        break;  
        default:
        break;
      }
      });
     }
     function reiniciar(i){
      detallespro[i].addEventListener("click", function(){
      location.reload(true);}) 
     }
     function limpiar(i) {
      for (var index = 0; index < ElementDiv.length; index++) {
        if(index==i){
            index=index+1;
            if(index>(ElementDiv.length-1)){
              break;
            }
            limpiar[index].innerHTML="";
        }else{
            limpiar[index].innerHTML="";
        } 
      }
      index=0;
     }  
  })
});


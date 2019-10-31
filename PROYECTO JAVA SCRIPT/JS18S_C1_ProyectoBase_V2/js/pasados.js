// Hemos omitido los acentos en los comentarios por compatibilidad

var pasados = [];
var hoy;
var eventos;
var html = ""
var contenidoPas=[];
var detallespas=[];
var newcontent=[];
var limpiar=[];

$(document).ready(function () {

  var value=0;
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
  hoy =resultado.fechaActual;
  eventos=resultado.eventos;

  for (var iterator of eventos) {
      if (iterator.fecha < hoy) {
          pasados.push(iterator);
      }
  }
  pasados = pasados.sort(function(x,y){
    if (x.fecha <= y.fecha){
      return 1;
    }
    return -1;
  });
  const ElementDiv = document.querySelectorAll('.event');
  for(var j = 0; j < pasados.length; j++){
    newcontent.push( `<h2>${pasados[j].nombre}</h2>
                      <p>${pasados[j].fecha} - ${pasados[j].lugar}</p>
                      <p>Descripción: ${pasados[j].descripcion}</p>
                      <p>Precio: ${pasados[j].precio}</p>
                      <p>invitados: ${pasados[j].invitados}</p>
                    `);
  contenidoPas.push(`<h2>${pasados[j].nombre}</h2>
                      <p>${pasados[j].fecha} - ${pasados[j].lugar}</p>
                      <p>Descripción: ${pasados[j].descripcion}</p>
                      <p>Precio: ${pasados[j].precio}</p>
                    `);                  
                    
                 try {
                     detallespas[j]=document.getElementById("pasados"+j);
                     detallespas[j].innerHTML=contenidoPas[j];
                     } catch (error) {
                       alert("indice por fuera de rango");
           }
    }   
  for (let i = 0; i < ElementDiv.length; i++) {
      limpiar[i]=document.getElementById("cont"+i);
      ElementDiv[i].addEventListener("click", function() {
      switch (ElementDiv[i].id) {
        case "pasados0":
              detallespas[i].innerHTML=newcontent[i];   
              limpiar(i);
              reiniciar(i);
        break;
        case "pasados1":
              detallespas[i].innerHTML=newcontent[i];;
              limpiar(i);
              reiniciar(i);
        break;
        case "pasados2":
              detallespas[i].innerHTML=newcontent[i];
              limpiar(i);
              reiniciar(i);
        break; 
        case "pasados3":
              detallespas[i].innerHTML=newcontent[i];;
              limpiar(i);
              reiniciar(i);
        break;  
        default:
        break;
      }
      });
     }
     function reiniciar(i){
      detallespas[i].addEventListener("click", function(){
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


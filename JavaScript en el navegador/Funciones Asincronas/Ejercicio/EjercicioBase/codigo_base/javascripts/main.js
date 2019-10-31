var eventos = [];
var index =5;
var ind=0;
var value=0; 

function iniciarEventos() {
  for (var i = 1; i <= 200; i++) {
    eventos.push({
      nombre: "Evento " + i,
      descripcion: "Esta es la descripción del evento " + i,
    })
  }
  return eventos;
}

function abrir() {
  var value=0; 

  for (var iterator of iniciarEventos()) {
     value +=1;
     if(value<=index){
       //console.log(iterator.nombre);
       //console.log(iterator.descripcion);
       //document.body.onload = addElement(iterator.nombre);
       //document.body.onload = addElement(iterator.descripcion);
       prueba(iterator);
       if(value==5){
         index=index+5;
       }
      } 
      
  }
  
}
function listappal() {
  
    indice =5;
  for (var [indice, iterator] of iniciarEventos().entries()) {
    value +=1;
     console.log(indice, iterator);
     if(indice<=4){
       //console.log(iterator.nombre);
       //console.log(iterator.descripcion);
       //document.body.onload = addElement(iterator.nombre);
       //document.body.onload = addElement(iterator.descripcion);
       prueba(iterator);
      }   
      
  }//indice+=5;
  console.log(indice);
  
}
/*function addElement (value) { 

  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(hola); 
  newDiv.appendChild(newContent);  

  // añade el elemento creado y su contenido al DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}*/

function prueba(iterator) {
var newNode = document.createElement("p");
var separador= document.createElement("hr");
var space= document.createElement("br");
var sp2 = document.getElementById("childElement");
// Obtener una referencia al nodo padre
var parentDiv = document.getElementById("childElement").parentNode;
var newContent1 = document.createTextNode(iterator.nombre); 
var newContent2 = document.createTextNode(iterator.descripcion); 
newNode.appendChild(newContent1);
newNode.appendChild(space);
newNode.appendChild(newContent2);
newNode.appendChild(separador);
parentDiv.insertBefore(newNode, sp2);
}
//document.body.onload = addElement("hola");
listappal();
//prueba();



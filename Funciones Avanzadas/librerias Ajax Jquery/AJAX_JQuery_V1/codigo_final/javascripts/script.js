

function cargarDatos() {
  $.ajax({
    url: "http://127.0.0.1:5500/AJAX_JQuery_V1/codigo_final/datos.json"
  }).done(function(respuesta){
    $("#contenido").html("Hola: " + respuesta.nombre);
    $("#contenido").slideDown("slow");
  });
};


$( document ).ready(function() {
  $("#contenido").hide();

  $("button.cargar").click(function(){
    cargarDatos();
  })

});

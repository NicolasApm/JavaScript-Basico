


var deporte
deporte=[{nombre: "Judo", origen: "Japón"}];
deporte1= {nombre: "Judo", origen: "Japón"};

function clubes(dojo,ciudad){
deporte.push({
  clubes:{
        dojo: dojo,
        ciudad:ciudad}
})
return deporte;
}

function impresion(dojo,ciudad){
 deporte1.clubes={
   dojo: dojo,
   ciudad:ciudad
 }
  var salida= `Club de ${deporte1.nombre} ${deporte1.clubes.dojo}, Ciudad:${deporte1.clubes.ciudad} de ${deporte1.origen}`
  return salida;
}

console.log(clubes("Sensei Vu","Inmaculada"));

var salida= `Club de ${deporte[0].nombre} ${deporte[1].clubes.dojo}, Ciudad:${deporte[1].clubes.ciudad} de ${deporte[0].origen}`


console.log(salida);
console.log(impresion("Sensei Sato","Tokio"));
console.log(deporte1);

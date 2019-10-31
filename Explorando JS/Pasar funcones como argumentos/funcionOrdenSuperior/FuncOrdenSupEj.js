/*function GestionarEstudiante (estudiante,nota1,nota2, promedio){
       //var resGestion = Gestion();
       promedio(nota1,nota2)
       return `Nombre Completo del Estudiante: ${estudiante} ${promedio(nota1,nota2)}`
}
function Promedio (nota1,nota2){
       return (nota1+nota2)/2;
}
GestionarEstudiante('Jose Carrillo', 18,20, Promedio);

console.log(GestionarEstudiante('Jose Carrillo', 18,20, Promedio));
//"Nombre Completo del Estudiante: Jose Carrillo 19"
*/

function GestionarEstudiante (estudiante,nota1,nota2,Gestion){
var resGestion = Gestion(nota1,nota2);
console.log (`Nombre Completo del Estudiante: ${estudiante} ${resGestion}`);
}
function Promedio (nota1,nota2){
return (nota1+nota2)/2;
}
GestionarEstudiante('Jose Carrillo', 18,20, Promedio);

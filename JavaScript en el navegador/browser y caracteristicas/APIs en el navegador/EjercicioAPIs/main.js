function validar(formulario) {
    guardar(formulario.paises.value);
    leer();
}

function guardar(form){
    localStorage.setItem('3',form);
}

function leer(){
    //return localStorage.getItem('2');
    //console.log(salida);
    document.getElementById("mostrar").innerHTML = localStorage.getItem('3');
}

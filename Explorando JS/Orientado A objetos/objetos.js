class Evento {

constructor(id,nombre,cantidadAsistentes,precioPorAsistente){
this.id1=id;
this.nombre1=nombre;
this.cantidadAsistentes1=cantidadAsistentes;
this.precioPorAsistente1=precioPorAsistente;
}

enlace(){
  return `/evento/<${this.id1}>`;
}


dineroTotalRecaudado(){
  return `Se recaudo = ${this.cantidadAsistentes1*this.precioPorAsistente1}`
}

}

var evento1 = new Evento(1,"e1", 12, 5);

console.log(evento1.enlace());
console.log(evento1.dineroTotalRecaudado());

/*class Persona{

  constructor(){
    this.nombre = "luis";
    this.apellido = "torres";
  }

}

var p = new Persona();
console.log(p.nombre);
console.log(p.apellido);*/

class Persona{

  constructor(){
    this.nombre = "luis";
    this.apellido = "torres";
  }

  nombreCompleto(){
    return `${this.nombre} ${this.apellido}`
  }

}

var p = new Persona();
console.log(p.nombre);
console.log(p.apellido);
console.log(p.nombreCompleto());

/*class Mascota{
  constructor(nombreApodo){
    this.apodo = nombreApodo;
  }
}*/



class Mascota{
  constructor(nombreApodo){
    this.apodo = nombreApodo;
  }

  setPropietario(propietario){
    this.propietario = propietario;
  }

}
var m1 = new Mascota("tobby");
console.log(m1.apodo);

m1.setPropietario(p);
console.log(m1.propietario.nombreCompleto())


class Empleado extends Persona{
  constructor(id){
    super();
    this.id = id;
  }
}

var emp = new Empleado(123);
console.log(emp.id);
console.log(emp.nombre);
console.log(emp.nombreCompleto());

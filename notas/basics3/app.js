class Persona{
    
    //constructor se utiliza para definir las propiedades
    constructor (nombre,edad,telefono,email,fnacimiento){
            this.nombre = name
            this.fnacimiento = fnacimiento
            this.edad = edad
            this.telefono = telefono
            this.email = email
    }

    //Funcion: cuando esta dentro de un objeto, solo pones el nombre de la funcion.
    presentarse(){
        return "hola me llamo" + this.nombre + " y tengo" + this.edad + " años"
    }
}

class Desarrollador extends Persona{

    constructor(nombre,edad,telefono,email,fnacimiento,lenguaje){
        super(nombre,edad,telefono,email,fnacimiento,lenguaje)
        this.lenguaje = lenguaje
    }
    programar(){
        return "El desarrollador" + this.nombre + " esta prgramando en" + this.lenguaje
    }
}


// se utilizo la palabra reservada new
var arturo = new Persona("Arturo ",34,5552015626," artro@gmail.com")
console.log(arturo.presentarse())
var daniel = new Persona("Daniel ",34,5552015626," daniel@gmail.com")
console.log(daniel.presentarse())
const ken = new Desarrollador("Ken ",26,4445673456,"ken@gmail.com","Ensamblador")
console.log(ken.presentarse())
console.log(ken.programar())

//Crear un objeto de tipo triungulo con atributos base y altura y tener el metodo
//calcular area y perimetro

class Triangulo{
    
    //constructor se utiliza para definir las propiedades
    constructor (base,altura){
            this.base = base
            this.altura = altura
    }

    //Funcion: cuando esta dentro de un objeto, solo pones el nombre de la funcion.
    area(){
        return (this.base * this.altura) / 2
    }
    perimetro(){
        return this.base * 3
    }
}

var equilatero = new Triangulo(2,3)
console.log(equilatero.area())
console.log(equilatero.perimetro())
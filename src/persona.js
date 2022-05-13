export class Persona{
    constructor(nombre="jorge", apellidos="gago"){
        this.nombre = nombre
        this.apellidos = apellidos
    }
    saludar(){
        alert(`Hola soy ${this.nombre} ${this.apellidos}`)
    }
    getNombre(){
        return this.nombre
    }
    getapellidos(){
        return this.apellidos
    }
    setNombre(nombre){
        const ERROR = "minimo 3 letras"
        if(nombre.length < 3){
            console.log(ERROR)
            return ERROR
        }
        this.nombre = nombre
    }
    setApellidos(apellidos){
        const ERROR = "minimo 3 letras"
        if(apellidos.length < 3){
            console.log(ERROR)
            return ERROR
        }
        this.nombre = nombre
    }
}
import {Persona} from "./persona.js"
import {nif} from "./nif.js"

export class Alumno extends Persona{
    constructor(nombre, apellidos, dni, notas, img){
        super(nombre, apellidos)
        //this.dni = dni
        this.notas = notas
        this.img =this.setImg(img)
        this.setDni(dni)
    }
    getDni(dni){
        return this.dni
    }
    getNotas(){
        return this.notas
    }
    getFichas(){
        let card=`
            <div class="card m-2 border border-primary" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.nombre} ${this.apellidos}</h5>
                    <p class="card-text">${this.dni}</p>
                    <p class="card-text text-center">modulo1: ${this.notas.modulo1}</p>
                    <p class="card-text text-center">modulo2: ${this.notas.modulo2}</p>
                    <p class="card-text text-center">modulo3: ${this.notas.modulo3}</p>
                </div>
            </div>
            `
        return card
    }
    setNotas(notas){
        this.notas = notas
    }
    setDni(dni){
        if(nif(dni) === true){
            this.dni = dni
        }else{
            this.dni = nif(dni)
            //console.log(nif(dni))
        }
    }
    setImg(imgs){
        //console.log(imgs)
        if(imgs == ""){
            //imgs="avatar.png"
            //imgs = "src/imagenes/avatar.png"
            imgs = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }else{
            imgs=`src/imagenes/${imgs}`
        }
        return imgs
    }
}


//src/imagenes/${this.img}
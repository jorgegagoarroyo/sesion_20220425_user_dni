import {Alumno} from "./alumno.js"
import {formulario} from "./base.js"

let alumnos = []
document.querySelector(".botones").addEventListener("click",(elemento)=>{
    if(elemento.target.classList.contains("crear")){
        let imgs=""
        let html =""
        if(form1.imgs.files[0]){
            imgs=form1.imgs.files[0].name
        }
        alumnos.push(new Alumno(form1.name.value, form1.last.value, form1.dni.value, {modulo1:form1.m1.value, modulo2:form1.m2.value, modulo3:form1.m3.value}, imgs))
        formularios.innerHTML = formulario()
        alumnos.forEach(element => {
            html += element.getFichas()
        })
        fichasAlumnos.innerHTML = html
        document.querySelector("#name").focus()
    }
    if(elemento.target.classList.contains("mostrar")){
        let html =""
        fichasAlumnos.innerHTML = html
        alumnos = []
        document.querySelector("#name").focus()
    }
})

const formularios = document.querySelector(".formularios")
const fichasAlumnos = document.querySelector(".fichas")
formularios.innerHTML = formulario() 


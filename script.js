import { Persona , Alumno } from "./persona.js";




var parrafoPersona = document.getElementById("objetoPersona");
var parrafoMetodoPersona = document.getElementById("MetodoPersona");

var miPersona = new Persona("ramirez" , "isi");

var miAlumno = new Alumno("hernandez" , "pedro");

parrafoPersona.innerText = miAlumno.apellido + " " + miAlumno.nombre;

parrafoMetodoPersona.innerText = miPersona.correr();




miAlumno.



//miPersona.morir();
parrafoMetodoPersona.innerText += miPersona.mostrarEstado();
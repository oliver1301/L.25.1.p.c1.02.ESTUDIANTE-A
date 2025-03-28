/**
 * ESTUDIANTE-A 
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. 
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias. 
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a 
15, ó recibe $20 si es al menos 10; si el promedio es menor de 10, no recibe beca. 
Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un 
estudiante y reporte el monto de la beca, o si no le corresponde beca. 
Ejemplos de la corrida: 
Nombre del estudiante: Mary 
Acumulado de notas: 132 
Cantidad de materias: 8 
Nota promedio: 16.50 
Mary recibe una beca de $30.00 
Nombre del estudiante: Alirio 
Acumulado de notas: 315 
Cantidad de materias: 35 
Nota promedio: 9.00 
Alirio no le corresponde beca 
 */

import Cl_becado from "./Cl_becado.js";

let e1 = new Cl_becado("Mary", 132, 8);
let e2 = new Cl_becado("Alirio", 315, 35);

let salida = document.getElementById("salida");
salida.innerHTML = `
<h3> Nombre del estudiante: ${e1.nombre} </h3>
<h3> Acumulado de notas: ${e1.acumNotas} </h3>
<h3> Cantidad de materias: ${e1.cantMaterias} </h3>
<h3> Nota promedio: ${e1.notapromedio()} </h3>
<h3> beca: ${e1.beca()} </h3>
<br>
<h3> Nombre del estudiante: ${e2.nombre} </h3>
<h3> Acumulado de notas: ${e2.acumNotas} </h3>
<h3> Cantidad de materias: ${e2.cantMaterias} </h3>
<h3> Nota promedio: ${e2.notapromedio()} </h3>
<h3> beca: ${e2.beca()} </h3>
`;
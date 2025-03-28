import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends Cl_estudiante  {
    constructor(nombre, acumNotas, cantMaterias,) {
        super(nombre, acumNotas, cantMaterias,);
    }
    beca () {
        if (this.notapromedio() > 15) {
            return 30;
        } if (this.notapromedio() >= 10) {
            return 20;
        }  
        else {
            return 0;
        }
    }

}
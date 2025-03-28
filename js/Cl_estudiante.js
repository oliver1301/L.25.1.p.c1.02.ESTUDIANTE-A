export default class Cl_estudiante {
    constructor(nombre, acumNotas, cantMaterias,) {
        this.nombre = nombre;
        this.acumNotas = acumNotas;
        this.cantMaterias = cantMaterias;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set acumNotas(n) {
        this._acumNotas = n;
    }
    get acumNotas() {
        return this._acumNotas;
    }
    set cantMaterias(n) {
        this._cantMaterias = n;
    }
    get cantMaterias() {
        return this._cantMaterias;
    }
    notapromedio() {
        return this.acumNotas / this.cantMaterias;
    }
} 

       
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntoGanado = 0;
    }
    lanzaDados(dado1, dado2) {
        dado1.lanzar();
        dado2.lanzar();
        return dado1.puntos + dado2.puntos;
    }
}
exports.Jugador = Jugador;

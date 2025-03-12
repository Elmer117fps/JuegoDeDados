"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugada = void 0;
class Jugada {
    iniciarJugada(jugador1, jugador2, dado1, dado2) {
        let puntosJ1 = jugador1.lanzaDados(dado1, dado2);
        let puntosJ2 = jugador2.lanzaDados(dado1, dado2);
        this.determinarGanador(jugador1, puntosJ1, jugador2, puntosJ2);
    }
    determinarGanador(j1, pJ1, j2, pJ2) {
        if (pJ1 > pJ2) {
            j1.puntoGanado++;
        }
        else if (pJ2 > pJ1) {
            j2.puntoGanado++;
        }
    }
}
exports.Jugada = Jugada;

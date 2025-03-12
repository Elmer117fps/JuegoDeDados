"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoDados = void 0;
const Jugador_1 = require("./Jugador");
const Dado_1 = require("./Dado");
const Jugada_1 = require("./Jugada");
class JuegoDados {
    constructor(jugador1, jugador2) {
        this.cantidadJugadas = 0;
        this.jugador1 = new Jugador_1.Jugador(jugador1);
        this.jugador2 = new Jugador_1.Jugador(jugador2);
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.dado1 = new Dado_1.Dado();
        this.dado2 = new Dado_1.Dado();
    }
    iniciarJuego() {
        let jugada = new Jugada_1.Jugada();
        jugada.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
        this.marcadorJugador1 = this.jugador1.puntoGanado;
        this.marcadorJugador2 = this.jugador2.puntoGanado;
        this.cantidadJugadas++;
    }
}
exports.JuegoDados = JuegoDados;

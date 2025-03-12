"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JuegoDados_1 = require("./JuegoDados");
const juego = new JuegoDados_1.JuegoDados("Jugador 1", "Jugador 2");
juego.iniciarJuego();
console.log(`Marcador: ${juego.jugador1.nombre} ${juego.marcadorJugador1} - ${juego.jugador2.nombre} ${juego.marcadorJugador2}`);

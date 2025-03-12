import { JuegoDados } from "./JuegoDados";

const juego = new JuegoDados("Jugador 1", "Jugador 2");
juego.iniciarJuego();
console.log(`Marcador: ${juego.jugador1.nombre} ${juego.marcadorJugador1} - ${juego.jugador2.nombre} ${juego.marcadorJugador2}`);
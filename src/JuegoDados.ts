import { Jugador } from "./Jugador";
import { Dado } from "./Dado";
import { Jugada } from "./Jugada";

export class JuegoDados {
    cantidadJugadas: number;
    jugador1: Jugador;
    jugador2: Jugador;
    marcadorJugador1: number;
    marcadorJugador2: number;
    dado1: Dado;
    dado2: Dado;
    
    constructor(jugador1: string, jugador2: string) {
        this.cantidadJugadas = 0;
        this.jugador1 = new Jugador(jugador1);
        this.jugador2 = new Jugador(jugador2);
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.dado1 = new Dado();
        this.dado2 = new Dado();
    }
    
    iniciarJuego(): void {
        let jugada = new Jugada();
        jugada.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
        this.marcadorJugador1 = this.jugador1.puntoGanado;
        this.marcadorJugador2 = this.jugador2.puntoGanado;
        this.cantidadJugadas++;
    }
}
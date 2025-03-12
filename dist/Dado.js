"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = void 0;
class Dado {
    constructor() {
        this.puntos = 0;
    }
    lanzar() {
        this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
exports.Dado = Dado;

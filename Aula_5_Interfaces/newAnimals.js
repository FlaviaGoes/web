"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ave_1 = require("./ave");
const mamifero_1 = require("./mamifero");
function newAnimals(animal) {
    animal.alimentar();
}
let Pato = new ave_1.Ave();
let Lobo = new mamifero_1.Mamifero();
newAnimals(Lobo);

import {Animal} from "./animal";
import {Ave} from "./ave";
import {Mamifero} from "./mamifero"

function newAnimals(animal: Animal) {
    return animal;
}

let Ornitorrinco = new Ave();
let Lobo = new Mamifero();

newAnimals(Lobo);

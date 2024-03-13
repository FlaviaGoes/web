import {Animal} from "./animal";
export class Mamifero implements Animal {
    alimentar(): any {
        console.log('Mamifero está se alimentando');
    }
    nascer(): any {
        console.log('Mamifero nascendo ou sendo transferida para o zoológico!')
    }
}
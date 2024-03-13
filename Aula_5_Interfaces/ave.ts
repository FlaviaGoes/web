import {Animal} from "./animal";
export class Ave implements Animal {
    alimentar(): any {
        console.log('Ave está se alimentando');
    }
    nascer(): any {
        console.log('Ave está nascendo ou sendo transferida para o zoológico!')
    }
}
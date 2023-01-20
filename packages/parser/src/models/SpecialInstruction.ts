import { Instruction } from './Instruction';

export class SpecialInstruction extends Instruction {
    constructor(notation: string) {
        super('special', notation);
    }
}

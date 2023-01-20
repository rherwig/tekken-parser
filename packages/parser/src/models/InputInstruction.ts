import { Instruction, InstructionType } from './Instruction';

export class InputInstruction extends Instruction {
    constructor(type: InstructionType, notation: string) {
        super(type, notation);
    }
}

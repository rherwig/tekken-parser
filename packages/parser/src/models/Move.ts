import { Instruction } from './Instruction';
import { InputInstruction } from './InputInstruction';
import { SpecialInstruction } from './SpecialInstruction';
import { isMovementInput, MOVEMENT_COMBINATOR } from '../utils/movement-utils';
import { ACTION_COMBINATOR, isActionInput } from '../utils/action-utils';
import { findSpecialInstruction } from '../utils/special-utils';

export class Move {
    public instructions: Instruction[] = [];

    constructor(notation: string) {
        this.parse(notation);
    }

    private parse(notation: string, index = 0): void {
        if (index > notation.length - 1) {
            return;
        }

        const currentCharacter = notation[index];
        let input = currentCharacter;

        let nextIndex = index + 1;
        const nextCharacter = notation[nextIndex];

        if (isMovementInput(currentCharacter)) {
            if (nextCharacter === MOVEMENT_COMBINATOR) {
                nextIndex += 2;
                input = notation.substring(index, nextIndex);
            }

            this.instructions.push(new InputInstruction(input));
        }

        if (isActionInput(currentCharacter)) {
            if (nextCharacter === ACTION_COMBINATOR) {
                nextIndex += 2;
                input = notation.substring(index, nextIndex);
            }

            this.instructions.push(new InputInstruction(input));
        }

        const special = findSpecialInstruction(notation.substring(index));
        if (special !== undefined) {
            nextIndex += special.length;

            this.instructions.push(new SpecialInstruction(special));
        }

        return this.parse(notation, nextIndex);
    }
}

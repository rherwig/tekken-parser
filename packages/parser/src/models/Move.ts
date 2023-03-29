import { Instruction } from './Instruction';
import { InputInstruction } from './InputInstruction';
import { SpecialInstruction } from './SpecialInstruction';
import { isMovementInput, MOVEMENT_COMBINATOR } from '../utils/movement-utils';
import { ACTION_COMBINATOR, isActionInput } from '../utils/action-utils';
import { isSpecialCharacter } from '../utils/special-utils';
import { findTextInstruction } from '../utils/text-utils';
import { isIgnoredCharacter } from '../utils/ignore-utils';

export type MoveType = 'launcher' | 'screw' | 'finisher' | 'extension';

export class Move {
    public instructions: Instruction[] = [];
    public type?: MoveType;

    constructor(notation: string, type?: MoveType) {
        this.parse(notation);
        this.type = type;
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

            this.instructions.push(new InputInstruction('movement', input));
        } else if (isActionInput(currentCharacter)) {
            if (nextCharacter === ACTION_COMBINATOR) {
                nextIndex += 2;
                input = notation.substring(index, nextIndex);
            }

            this.instructions.push(new InputInstruction('action', input));
        } else if (isSpecialCharacter(currentCharacter)) {
            this.instructions.push(new SpecialInstruction(currentCharacter));
        } else if (
            !isIgnoredCharacter(currentCharacter) ||
            currentCharacter === '"'
        ) {
            const text = findTextInstruction(notation, index);

            if (text?.length) {
                nextIndex += text.length;

                this.instructions.push(new SpecialInstruction(text));
            }
        }

        return this.parse(notation, nextIndex);
    }
}

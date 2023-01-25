import { isActionInput } from './action-utils';
import { isMovementInput } from './movement-utils';
import { isSpecialCharacter } from './special-utils';
import { isIgnoredCharacter } from './ignore-utils';

export const findTextInstruction = (
    notation: string,
    startIndex: number = 0,
): string | null => {
    let value = '';
    let nextIndex = startIndex;

    while (
        nextIndex < notation.length &&
        !isActionInput(notation[nextIndex]) &&
        !isMovementInput(notation[nextIndex]) &&
        !isSpecialCharacter(notation[nextIndex]) &&
        !isIgnoredCharacter(notation[nextIndex])
    ) {
        value += notation[nextIndex];
        nextIndex++;
    }

    return value.length ? value : null;
};

import { ACTION_SEPARATOR } from './action-utils';
import { MOVE_SEPARATOR } from './movement-utils';

export const TEXT_DELIMITERS = [MOVE_SEPARATOR, ACTION_SEPARATOR, '"'];

const isEndOfText = (character: string): boolean => {
    return TEXT_DELIMITERS.includes(character);
};

export const findTextInstruction = (
    notation: string,
    startIndex: number = 0,
): string | null => {
    let value = '';
    let nextIndex = startIndex;

    while (nextIndex < notation.length && !isEndOfText(notation[nextIndex])) {
        value += notation[nextIndex];
        nextIndex++;
    }

    return value.length ? value : null;
};

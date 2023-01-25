import { ACTION_COMBINATOR, ACTION_SEPARATOR } from './action-utils';
import { MOVEMENT_COMBINATOR } from './movement-utils';

const COMBO_SEPARATOR = ';';

const IGNORED_CHARACTERS = [
    ACTION_COMBINATOR,
    ACTION_SEPARATOR,
    COMBO_SEPARATOR,
    MOVEMENT_COMBINATOR,
];

export const isIgnoredCharacter = (char: string) => {
    return IGNORED_CHARACTERS.includes(char);
};

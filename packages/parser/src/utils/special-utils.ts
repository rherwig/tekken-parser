import {
    ACTION_IMMEDIATE_COMBINATOR,
    ACTION_JUST_COMBINATOR,
} from './action-utils';

const SPECIAL_INSTRUCTIONS = [
    ACTION_IMMEDIATE_COMBINATOR,
    ACTION_JUST_COMBINATOR,
];

export const isSpecialCharacter = (char: string) => {
    return SPECIAL_INSTRUCTIONS.includes(char);
};

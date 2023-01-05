const MOVEMENT_INPUTS = [
    'f',
    'd',
    'b',
    'u',
    'F',
    'D',
    'B',
    'U',
    'N',
    'HCF',
    'HCB',
    'QCF',
    'QCB',
];

export const MOVEMENT_COMBINATOR = '/';
export const MOVE_SEPARATOR = ';';

export const isMovementInput = (notation: string): boolean => {
    return MOVEMENT_INPUTS.includes(notation);
};

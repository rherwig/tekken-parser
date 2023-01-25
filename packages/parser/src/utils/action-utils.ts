const ACTION_INPUTS = ['1', '2', '3', '4'];

export const ACTION_SEPARATOR = ',';
export const ACTION_COMBINATOR = '+';
export const ACTION_IMMEDIATE_COMBINATOR = '~';
export const ACTION_JUST_COMBINATOR = ':';

export const isActionInput = (notation: string): boolean => {
    return ACTION_INPUTS.includes(notation);
};

const JUST_FRAME = ':';
const WALL_HIT = 'W!';
const WALL_BOUNCE = 'WB!';

const SPECIAL_INSTRUCTIONS = [
    JUST_FRAME,
    WALL_BOUNCE,
    WALL_HIT,
];

export const findSpecialInstruction = (notation: string): string | undefined => {
    return SPECIAL_INSTRUCTIONS.find((special: string) => notation.startsWith(special));
};

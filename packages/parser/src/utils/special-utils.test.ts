import { describe, it, expect } from 'vitest';
import { findSpecialInstruction } from './special-utils';

const SPECIAL_INSTRUCTIONS = [
    'W!',
    'WB!',
];
const NON_SPECIAL_INSTRUCTIONS = ['1', 'd', '/'];

describe('utils/special-utils', () => {
    describe('findSpecialInstruction', () => {
        it('returns instruction, if input is special instruction', () => {
            SPECIAL_INSTRUCTIONS.forEach((input: string) => {
                expect(findSpecialInstruction(input)).toBeDefined();
            });
        });

        it('returns undefined, if input is not special instruction', () => {
            NON_SPECIAL_INSTRUCTIONS.forEach((input: string) => {
                expect(findSpecialInstruction(input)).toBeUndefined();
            });
        });
    });
});

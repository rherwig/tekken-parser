import { describe, it, expect } from 'vitest';
import { isMovementInput } from './movement-utils';

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
const NON_MOVEMENT_INPUTS = ['1', ':', '/', 'W!'];

describe('utils/movement-utils', () => {
    describe('isMovementInput', () => {
        it('returns true, if input is movement input', () => {
            MOVEMENT_INPUTS.forEach((input: string) => {
                expect(isMovementInput(input)).toBe(true);
            });
        });

        it('returns false, if input is not movement input', () => {
            NON_MOVEMENT_INPUTS.forEach((input: string) => {
                expect(isMovementInput(input)).toBe(false);
            });
        });
    });
});

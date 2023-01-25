import { describe, it, expect } from 'vitest';
import { findTextInstruction } from './text-utils';

const TEXT_INSTRUCTIONS = ['W!', 'WB!'];
const NON_TEXT_INSTRUCTIONS = ['1', 'd', '/'];

describe('utils/test-utils', () => {
    describe('findTextInstruction', () => {
        it('returns instruction, if input is a text instruction', () => {
            TEXT_INSTRUCTIONS.forEach((input: string) => {
                expect(findTextInstruction(input)).toBeDefined();
            });
        });

        it('returns undefined, if input is not a text instruction', () => {
            NON_TEXT_INSTRUCTIONS.forEach((input: string) => {
                expect(findTextInstruction(input)).toEqual(null);
            });
        });
    });
});

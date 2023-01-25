import { describe, it, expect } from 'vitest';

import { isSpecialCharacter } from './special-utils';

const SPECIAL_CHARACTERS = [':', '~'];
const NON_SPECIAL_CHARACTERS = ['1', 'd', 'W', ','];

describe('utils/special-utils', () => {
    describe('isSpecialCharacter', () => {
        it('returns true, if input is special instruction', () => {
            SPECIAL_CHARACTERS.forEach((input: string) => {
                expect(isSpecialCharacter(input)).toBe(true);
            });
        });

        it('returns false, if input is not a special character', () => {
            NON_SPECIAL_CHARACTERS.forEach((input: string) => {
                expect(isSpecialCharacter(input)).toBe(false);
            });
        });
    });
});

import { describe, it, expect } from 'vitest';

import { isIgnoredCharacter } from './ignore-utils';

const IGNORED_CHARACTERS = [',', '+', '/'];
const NON_IGNORE_CHARACTERS = ['1', 'd', 'W'];

describe('utils/ignore-utils', () => {
    describe('isIgnoredCharacter', () => {
        it('returns true, if input is ignored', () => {
            IGNORED_CHARACTERS.forEach((input: string) => {
                expect(isIgnoredCharacter(input)).toBe(true);
            });
        });

        it('returns false, if input is not ignored', () => {
            NON_IGNORE_CHARACTERS.forEach((input: string) => {
                expect(isIgnoredCharacter(input)).toBe(false);
            });
        });
    });
});

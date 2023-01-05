import { describe, it, expect } from 'vitest';
import { isActionInput } from './action-utils';

const ACTION_INPUTS = ['1', '2', '3', '4'];
const NON_ACTION_INPUTS = ['d', ':', '/', 'W!'];

describe('utils/action-utils', () => {
    describe('isActionInput', () => {
        it('returns true, if input is action input', () => {
            ACTION_INPUTS.forEach((input: string) => {
                expect(isActionInput(input)).toBe(true);
            });
        });

        it('returns false, if input is not action input', () => {
            NON_ACTION_INPUTS.forEach((input: string) => {
                expect(isActionInput(input)).toBe(false);
            });
        });
    });
});

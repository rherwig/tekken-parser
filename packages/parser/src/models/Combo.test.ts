import { describe, it, expect, beforeEach } from 'vitest';
import { Combo } from './Combo';

const SAMPLE_COMBO = 'd2;f2,1;f,f4,2;d/f2,1';
const NUMBER_OF_MOVES = SAMPLE_COMBO.split(';').length;

describe('models/Combo', () => {
    let combo: Combo;

    beforeEach(() => {
        combo = new Combo(SAMPLE_COMBO);
    });

    it('returns list of moves', () => {
        expect(combo.moves.length).toBe(NUMBER_OF_MOVES);
    });
});

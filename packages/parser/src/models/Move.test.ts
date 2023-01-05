import { describe, it, expect, beforeEach } from 'vitest';
import { Move } from './Move';

const SAMPLE_MOVES = [
    'd2',
    'd/f2',
    'd/f1+2,1+2',
    'd/f1+2,1+2W!',
];

describe('models/Move', () => {
    let moves: Move[];

    beforeEach(() => {
        moves = SAMPLE_MOVES.map((notation: string) => new Move(notation));
    });

    it('contains the correct amount of instructions', () => {
        expect(moves[0].instructions.length).toBe(2);
        expect(moves[1].instructions.length).toBe(2);
        expect(moves[2].instructions.length).toBe(3);
        expect(moves[3].instructions.length).toBe(4);
    });
});

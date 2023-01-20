import { describe, it, expect, beforeEach } from 'vitest';
import { Instruction } from './Instruction';

const SAMPLE_INSTRUCTIONS = ['d', 'd/f', '1+2', 'W!'];

describe('models/Instruction', () => {
    let instructions: Instruction[];

    beforeEach(() => {
        instructions = SAMPLE_INSTRUCTIONS.map(
            (notation: string) => new Instruction('action', notation),
        );
    });

    it('sets the correct notation', () => {
        instructions.forEach((instruction, index) => {
            expect(instruction.notation).toBe(SAMPLE_INSTRUCTIONS[index]);
        });
    });

    it('cleans the slug', () => {
        expect(instructions[0].slug).toBe('d');
        expect(instructions[1].slug).toBe('df');
        expect(instructions[2].slug).toBe('12');
        expect(instructions[3].slug).toBe('W');
    });

    it('returns the notation when converted to string', () => {
        instructions.forEach((instruction, index) => {
            expect(`${instruction}`).toBe(instruction.notation);
        });
    });
});

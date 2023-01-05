import { describe, it, expect, beforeEach } from 'vitest';
import { SpecialInstruction } from './SpecialInstruction';

const SAMPLE_INSTRUCTION = 'W!';

describe('models/SpecialInstruction', () => {
    let instruction: SpecialInstruction;

    beforeEach(() => {
        instruction = new SpecialInstruction(SAMPLE_INSTRUCTION);
    });

    it('contains the specified notation', () => {
        expect(instruction.notation).toBe(SAMPLE_INSTRUCTION);
    });
});

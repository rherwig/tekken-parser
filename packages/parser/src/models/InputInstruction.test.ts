import { describe, it, expect, beforeEach } from 'vitest';
import { InputInstruction } from './InputInstruction';

const SAMPLE_INSTRUCTION = '1';

describe('models/InputInstruction', () => {
    let instruction: InputInstruction;

    beforeEach(() => {
        instruction = new InputInstruction('action', SAMPLE_INSTRUCTION);
    });

    it('contains the specified notation', () => {
        expect(instruction.notation).toBe(SAMPLE_INSTRUCTION);
    });
});

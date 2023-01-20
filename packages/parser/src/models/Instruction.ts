export type InstructionType = 'movement' | 'action' | 'special' | 'unknown';

export class Instruction {
    public type: InstructionType = 'unknown';
    public notation: string;
    public slug: string;

    constructor(type: InstructionType, notation: string) {
        this.type = type;
        this.notation = notation;
        this.slug = notation.replace(/\W/gi, '');
    }

    public toString(): string {
        return this.notation;
    }
}

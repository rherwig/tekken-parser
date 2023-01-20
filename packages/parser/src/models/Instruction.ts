export type InstructionType = 'movement' | 'action' | 'special' | 'unknown';

export class Instruction {
    public type: InstructionType = 'unknown';
    public notation: string;
    public slug: string;

    constructor(type: InstructionType, notation: string) {
        this.type = type;
        this.notation = notation;
        this.slug = this._buildSlug(type, notation);
    }

    private _buildSlug(type: InstructionType, notation: string) {
        let slug = notation.replace(/\W/gi, '');

        if (type === 'movement' && /[A-Z]+/.test(slug)) {
            slug = `${slug.toLowerCase()}h`;
        }

        return slug;
    }

    public toString(): string {
        return this.notation;
    }
}

export class Instruction {
    public notation: string;
    public slug: string;

    constructor(notation: string) {
        this.notation = notation;
        this.slug = notation.replace(/\W/gi, '');
    }

    public toString(): string {
        return this.notation;
    }
}

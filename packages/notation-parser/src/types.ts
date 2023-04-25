export enum TekkenInstructionType {
    UNKNOWN = 'UNKNOWN',
    MOVE = 'MOVE',
    ACTION = 'ACTION',
    SPECIAL = 'SPECIAL',
    TEXT = 'TEXT',
}

export interface TekkenInstruction {
    type: TekkenInstructionType;
    notation: string;
    slug: string;
}

export interface TekkenMove {
    notation: string;
    instructions: TekkenInstruction[];
}

export interface TekkenCombo {
    moves: TekkenMove[];
}

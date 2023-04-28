export enum TekkenInstructionType {
    UNKNOWN = 'UNKNOWN',
    MOVE = 'MOVE',
    ACTION = 'ACTION',
    SPECIAL = 'SPECIAL',
    TEXT = 'TEXT',
}

export interface TekkenInput {
    notation: string;
}

export interface TekkenInstruction {
    type: TekkenInstructionType;
    notation: string;
    slug: string;
    inputs: TekkenInput[];
}

export interface TekkenMove {
    notation: string;
    instructions: TekkenInstruction[];
}

export interface TekkenCombo {
    moves: TekkenMove[];
}

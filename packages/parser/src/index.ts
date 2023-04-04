import { Combo } from './models/Combo';

export * from './models/Combo';
export * from './models/Move';
export * from './models/Instruction';

export function parse(tekkenNotation: string): Combo {
    return new Combo(tekkenNotation);
}

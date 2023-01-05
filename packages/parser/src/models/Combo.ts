import { Move } from './Move';
import { MOVE_SEPARATOR } from '../utils/movement-utils';

export class Combo {
    public moves: Move[];

    constructor(tekkenNotation: string) {
        this.moves = this.parse(tekkenNotation);
    }

    private parse(tekkenNotation: string): Move[] {
        return tekkenNotation.split(MOVE_SEPARATOR).map((move: string) => {
            return new Move(move);
        });
    }
}

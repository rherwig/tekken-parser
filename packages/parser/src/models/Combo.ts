import { Move } from './Move';
import { MOVE_SEPARATOR } from '../utils/movement-utils';

export class Combo {
    public name?: string;
    public description?: string;
    public damage?: number;
    public hits?: number;
    public moves: Move[];

    constructor(
        tekkenNotation: string,
        name?: string,
        description?: string,
        damage?: number,
        hits?: number,
    ) {
        this.name = name;
        this.description = description;
        this.damage = damage;
        this.hits = hits;
        this.moves = this.parse(tekkenNotation);
    }

    private parse(tekkenNotation: string): Move[] {
        return tekkenNotation.split(MOVE_SEPARATOR).map((move: string) => {
            return new Move(move);
        });
    }
}

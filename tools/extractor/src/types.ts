export interface RawCharacter {
    id: number;
    name: string;
    count: number;
    moves: RawMove[];
}

export interface Character {
    name: string;
    slug: string;
    moves: Record<string, any>[];
}

export enum HitLevel {
    Low = 1,
    Mid = 2,
    Projectile = 3,
    SpecialMid = 4,
    High = 5,
    Unblockable1 = 7,
    Unblockable2 = 8,
    AntiAir = 11,
}

export interface RawHit {
    l: HitLevel;

    /**
     * Hit is a throw, when t > 0
     */
    t: number;
}

export interface RawDamage {
    h: number;

    /**
     * Damage point value of the hit
     */
    d: number;
}

export interface RawMove {
    number: number;
    name: string[];
    command: string[];

    /**
     * Number of startup frames
     */
    s: number;
    at: RawHit[];
    ds: RawDamage[];
}

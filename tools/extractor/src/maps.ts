import { HitLevel } from './types';

export const HIT_MAP: Record<HitLevel, string> = {
    [HitLevel.Low]: 'Low',
    [HitLevel.Mid]: 'Mid',
    [HitLevel.Projectile]: 'Projectile',
    [HitLevel.SpecialMid]: 'Special Mid',
    [HitLevel.High]: 'High',
    [HitLevel.Unblockable1]: 'Unblockable 1',
    [HitLevel.Unblockable2]: 'Unblockable 2',
    [HitLevel.AntiAir]: 'Anti Air',
};

/**
 * List of abbrevations that map the Tekken 7 in-game notation to the actual
 * Tekken notation keywords.
 *
 * Keywords that are not covered in this list will be deleted when parsing the data.
 */
export const SPECIALS_MAP: Record<string, string> = {
    'while rising': 'WS',
    'during rage': 'Rage',
    'during hit': 'Hit',
    'during tackle': 'Tackle',
    '\\(counter hit\\)': 'CH',
    'while crouching': 'FC',
    'during sidestep': 'SS',
    'approach from behind': 'Back',
    'time with enemy attack': 'Parry',
    'during jump': 'Jump',
    'approach enemy': '',
};

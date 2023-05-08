import { join } from 'node:path';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

import controls from './assets/controls.json';
import { Character, RawCharacter, RawMove } from './types';
import { HIT_MAP, SPECIALS_MAP } from './maps';

/**
 * Directory that is used to store the converted character data.
 */
const OUTPUT_DIRECTORY = join(__dirname, '..', '.output');

/**
 * Index of the used language, since the input data is localized.
 * 0 = Japanese
 * 1 = English
 */
const LANGUAGE_INDEX = 1;

const INSTRUCTION_SEPARATOR = ',';
const QUOTE = '"';

/**
 * Replaces abbreviations with their notation counterpart, removes all text in
 * brackets and adds double-quotes to text-tokens.
 * @param raw
 */
function escapeText(raw: string) {
    const textRegex = /\(?(?:\w+\s?\w+?)+\)?/g;
    const bracketTextRegex = /\(.*\)/g;

    const replaced = Object.keys(SPECIALS_MAP).reduce(
        (result: string, key: string) => {
            return result.replace(
                new RegExp(`${key}`, 'gi'),
                SPECIALS_MAP[key],
            );
        },
        raw,
    );

    const sanitized = replaced.replace(bracketTextRegex, '');
    return sanitized.replace(
        textRegex,
        `${QUOTE}$&${QUOTE}${INSTRUCTION_SEPARATOR}`,
    );
}

/**
 * Trims all spaces except for those inside quotes words/phrases.
 * @param raw
 */
function trimSpaces(raw: string) {
    const spaceRegex = /\s+(?=(?:[^"]*"[^"]*")*[^"]*$)/g;

    return raw.replace(spaceRegex, '');
}

/**
 * Replaces the unicode characters for the actual move with their respective
 * counterpart from the Tekken notation.
 * @param raw
 */
function mapCommands(raw: string): string {
    let result = '';

    for (let i = 0; i < raw.length; i++) {
        const rawChar = raw.charAt(i);
        const mappedChar = (controls as Record<string, string | undefined>)[
            rawChar
        ];

        result += mappedChar
            ? `${mappedChar}${INSTRUCTION_SEPARATOR}`
            : rawChar;
    }

    return result;
}

/**
 * Removes unnecessary commas (instruction separators) from the input.
 * @param raw
 */
function sanitize(raw: string) {
    const spareCommaRegex = /,(?=;)|(?<=;),|,$/g;

    return raw.replace(spareCommaRegex, '');
}

/**
 * Converts the in-game move data into human-readable data that is compatible
 * with `@tekken-space/notation-parser`.
 * @param rawCommand
 */
function parseCommand(rawCommand: string): string {
    const escaped = escapeText(rawCommand);
    const trimmed = trimSpaces(escaped);
    const mapped = mapCommands(trimmed);

    return sanitize(mapped);
}

/**
 * Extracts the hit levels (low, mid, ...) from the raw move.
 * @param move
 */
function parseHitLevels(move: RawMove): string[] {
    return move.at
        .map((hit) => {
            return HIT_MAP[hit.l];
        })
        .filter(Boolean);
}

/**
 * Determines, if the raw move contains any throw.
 * @param move
 */
function parseIsThrow(move: RawMove): boolean {
    return move.at.some((hit) => hit.t > 0);
}

/**
 * Calculates the damage a move/combo does.
 * @param move
 */
function parseDamage(move: RawMove): number {
    return move.ds.reduce((result: number, rawDamage) => {
        return result + rawDamage.d;
    }, 0);
}

/**
 * Extracts the correct localized move command and has it parsed in order to
 * return a move in human-readable format.
 * @param move
 */
function parseMove(move: RawMove): Record<string, any> | null {
    // Special case for Eliza's and Akuma's special moves
    if (move.number === 0) {
        return null;
    }

    const index = move.number;
    const name = move.name[LANGUAGE_INDEX];
    const notation = parseCommand(move.command[LANGUAGE_INDEX]);
    const hitLevels = parseHitLevels(move);
    const isThrow = parseIsThrow(move);
    const damage = parseDamage(move);
    const startup = move.s;

    return {
        index,
        name,
        notation,
        hitLevels,
        isThrow,
        damage,
        frames: {
            startup,
        },
    };
}

/**
 * Converts raw character data into a well-defined character object.
 * @param rawCharacter
 */
function parseCharacter(rawCharacter: RawCharacter): Character {
    const name = rawCharacter.name.replace(/[[\]]/g, '');
    const slug = name.toLowerCase().replace(/\s/g, '-');
    const moves = rawCharacter.moves.reduce(
        (result: Record<string, any>[], rawMove) => {
            const move = parseMove(rawMove);

            return move !== null ? result.concat(move) : result;
        },
        [],
    );

    return {
        name,
        slug,
        moves,
    };
}

async function run() {
    const rawCharacters: RawCharacter[] = [
        await import('./assets/movelists/paul.json'),
        await import('./assets/movelists/alisa.json'),
        await import('./assets/movelists/akuma.json'),
        await import('./assets/movelists/bob.json'),
        await import('./assets/movelists/bryan.json'),
        await import('./assets/movelists/asuka.json'),
        await import('./assets/movelists/devil-jin.json'),
        await import('./assets/movelists/dragunov.json'),
        await import('./assets/movelists/eddy.json'),
        await import('./assets/movelists/eliza.json'),
        await import('./assets/movelists/feng.json'),
        await import('./assets/movelists/gigas.json'),
        await import('./assets/movelists/heihachi.json'),
        await import('./assets/movelists/katarina.json'),
        await import('./assets/movelists/kazuya.json'),
        await import('./assets/movelists/kazumi.json'),
        await import('./assets/movelists/hwoarang.json'),
        await import('./assets/movelists/jack.json'),
        await import('./assets/movelists/jin.json'),
        await import('./assets/movelists/josie.json'),
        await import('./assets/movelists/king.json'),
        await import('./assets/movelists/kuma.json'),
        await import('./assets/movelists/panda.json'),
        await import('./assets/movelists/shaheen.json'),
        await import('./assets/movelists/lars.json'),
        await import('./assets/movelists/yoshimitsu.json'),
        await import('./assets/movelists/steve.json'),
        await import('./assets/movelists/nina.json'),
        await import('./assets/movelists/xiaoyu.json'),
        await import('./assets/movelists/master-raven.json'),
        await import('./assets/movelists/lucky-chloe.json'),
        await import('./assets/movelists/leo.json'),
        await import('./assets/movelists/lee.json'),
        await import('./assets/movelists/miguel.json'),
        await import('./assets/movelists/lili.json'),
        await import('./assets/movelists/law.json'),
    ];

    if (!existsSync(OUTPUT_DIRECTORY)) {
        mkdirSync(OUTPUT_DIRECTORY);
    }

    rawCharacters.forEach((rawCharacter) => {
        try {
            const character = parseCharacter(rawCharacter);

            writeFileSync(
                join(OUTPUT_DIRECTORY, `${character.slug}.json`),
                JSON.stringify(character, null, 2),
                'utf-8',
            );
        } catch (error: any) {
            console.warn(
                `Failed to parse character '${rawCharacter.name}'.`,
                error.message,
            );
        }
    });
}

run().catch(console.error.bind(console));

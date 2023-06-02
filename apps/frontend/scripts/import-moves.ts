import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

import { Move } from '@prisma/client';

import { prisma } from '../prisma/client';

import { findOrCreateCharacter } from './utils/character';

interface ImportedMove {
    command: string;
    hit_level: string;
    damage: string;
    start_up_frame: string;
    block_frame: string;
    hit_frame: string;
    counter_hit_frame: string;
    notes: string;
}

type MoveDto = Omit<Move, 'id' | 'updatedAt' | 'createdAt'>;

const MOVELISTS_PATH = resolve(__dirname, '../assets/json/moves');
const STARTUP_FRAME_REGEX = /(\d+)~?(\d+)?\s?/;
const BLOCK_FRAME_REGEX = /([-+]\d+)~?([-+]\d+)\s?/;

const COMMAND_REPLACEMENTS: Record<string, string> = {
    ' or ': ' "OR" ',
    'in rage': 'RAGE',
    '(': '"',
    ')': '"',
};

function formatCommand(command: string): string {
    return Object.entries(COMMAND_REPLACEMENTS).reduce(
        (result, [search, replacement]) => {
            return result.replaceAll(search, replacement);
        },
        command,
    );
}

function formatFrames(frames: string | undefined, regex: RegExp): number[] {
    const result: number[] = [];

    if (!frames) {
        return result;
    }

    const match = frames.match(regex);
    const [, initial, secondary] = match || [];

    if (initial) {
        result.push(parseInt(initial, 10));
    }

    if (secondary) {
        result.push(parseInt(secondary, 10));
    }

    return result;
}

function formatDamage(damage: string) {
    if (!damage) {
        return [];
    }

    return damage
        .split(',')
        .map((value) => parseInt(value, 10))
        .filter((value) => !isNaN(value));
}

function formatHitLevel(hitLevel: string) {
    if (!hitLevel) {
        return [];
    }

    return hitLevel.split(',').map((value) => value.trim());
}

async function importMovesForCharacter(characterName: string) {
    console.info(`[Import] Starting import for ${characterName}.`);
    const character = await findOrCreateCharacter(characterName);

    console.info(`[Import] Loading move list.`);
    const moveList: ImportedMove[] = JSON.parse(
        readFileSync(`${MOVELISTS_PATH}/${character.slug}.json`, 'utf-8'),
    );

    console.info(`[Import] Converting moves.`);
    const moves: MoveDto[] = moveList.map((move, index) => {
        const damage = formatDamage(move.damage);

        const hitLevels = formatHitLevel(move.hit_level);

        const isThrow = move.hit_level?.toLocaleLowerCase().includes('throw');

        const startupFrames = formatFrames(
            move.start_up_frame,
            STARTUP_FRAME_REGEX,
        );
        const blockFrames = formatFrames(move.block_frame, BLOCK_FRAME_REGEX);

        return {
            isCombo: false,
            index: index,
            name: '',
            slug: '',
            notation: formatCommand(move.command),
            characterId: character.id,
            notes: move.notes,
            aliases: [],
            damage,
            hitLevels,
            isThrow,
            startupFrames,
            blockFrames,
            counterHitFrames: [],
            hasTailspin: false,
            hitFrames: [],
            isHoming: false,
            isPowerCrush: false,
            isWallBounce: false,
        };
    });

    console.info(`[Import] Writing moves to database.`);
    const result = await prisma.$transaction([
        prisma.move.deleteMany({
            where: {
                characterId: character.id,
                isCombo: false,
            },
        }),
        ...moves.map((move) => {
            return prisma.move.create({
                data: move,
            });
        }),
    ]);

    console.info(`[Import] Finished import for ${characterName}.`);
    console.info();

    return result;
}

async function importMoves() {
    if (!process.env.MAINTENANCE_MODE) {
        console.warn(`Please enable MAINTENANCE_MODE via env to proceed.`);
        return;
    }

    try {
        await importMovesForCharacter('Akuma');
        await importMovesForCharacter('Alisa');
        await importMovesForCharacter('Anna');
        await importMovesForCharacter('Armor King');
        await importMovesForCharacter('Asuka');
        await importMovesForCharacter('Bob');
        await importMovesForCharacter('Bryan');
        await importMovesForCharacter('Claudio');
        await importMovesForCharacter('Devil Jin');
        await importMovesForCharacter('Dragunov');
        await importMovesForCharacter('Eddy');
        await importMovesForCharacter('Eliza');
        await importMovesForCharacter('Fahkumram');
        await importMovesForCharacter('Feng');
        await importMovesForCharacter('Ganryu');
        await importMovesForCharacter('Geese');
        await importMovesForCharacter('Gigas');
        await importMovesForCharacter('Heihachi');
        await importMovesForCharacter('Hwoarang');
        await importMovesForCharacter('Jack-7');
        await importMovesForCharacter('Jin');
        await importMovesForCharacter('Josie');
        await importMovesForCharacter('Julia');
        await importMovesForCharacter('Katarina');
        await importMovesForCharacter('Kazumi');
        await importMovesForCharacter('Kazuya');
        await importMovesForCharacter('King');
        await importMovesForCharacter('Kuma');
        await importMovesForCharacter('Kunimitsu');
        await importMovesForCharacter('Lars');
        await importMovesForCharacter('Law');
        await importMovesForCharacter('Lee');
        await importMovesForCharacter('Lei');
        await importMovesForCharacter('Leo');
        await importMovesForCharacter('Leroy');
        await importMovesForCharacter('Lili');
        await importMovesForCharacter('Lucky Chloe');
        await importMovesForCharacter('Marduk');
        await importMovesForCharacter('Master Raven');
        await importMovesForCharacter('Miguel');
        await importMovesForCharacter('Negan');
        await importMovesForCharacter('Nina');
        await importMovesForCharacter('Noctis');
        await importMovesForCharacter('Paul');
        await importMovesForCharacter('Shaheen');
        await importMovesForCharacter('Steve');
        await importMovesForCharacter('Xiaoyu');
        await importMovesForCharacter('Yoshimitsu');
        await importMovesForCharacter('Zafina');
    } catch (error: any) {
        console.error(`Error importing moves`, error.message);
    }
}

importMoves().catch(console.error.bind(console));

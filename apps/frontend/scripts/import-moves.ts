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

function formatFrames(frames: string, regex: RegExp): number[] {
    const result: number[] = [];

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

async function importMovesForCharacter(characterName: string) {
    console.info(`[Import] Starting import for ${characterName}.`);
    const character = await findOrCreateCharacter(characterName);

    console.info(`[Import] Loading move list.`);
    const moveList: ImportedMove[] = JSON.parse(
        readFileSync(`${MOVELISTS_PATH}/${character.slug}.json`, 'utf-8'),
    );

    console.info(`[Import] Converting moves.`);
    const moves: MoveDto[] = moveList.map((move, index) => {
        const damage = !move.damage
            ? []
            : move.damage.split(',').map((damage) => parseInt(damage, 10));

        const hitLevels = move.hit_level
            .split(',')
            .map((hitLevel) => hitLevel.trim());

        const isThrow = move.hit_level.toLocaleLowerCase().includes('throw');

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
        // console.warn(`Please enable MAINTENANCE_MODE via env to proceed.`);
        // return;
    }

    try {
        await importMovesForCharacter('Akuma');
    } catch (error: any) {
        console.error(`Error importing moves`, error.message);
    }
}

importMoves().catch(console.error.bind(console));

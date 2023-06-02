import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

import { prisma } from '../prisma/client';

import { findOrCreateCharacter } from './utils/character';

interface ImportedComboMove {
    index: number;
    name: string;
    notation: string;
    damage: number;
    hitLevels: string[];
}

interface ImportedComboList {
    name: string;
    slug: string;
    moves: ImportedComboMove[];
}

const MOVELISTS_PATH = resolve(__dirname, '../assets/json/combos');

async function importCombosForCharacter(characterName: string) {
    console.info(`[Import] Starting import for ${characterName}.`);
    const character = await findOrCreateCharacter(characterName);

    console.info(`[Import] Loading move list.`);
    const moveList: ImportedComboList = JSON.parse(
        readFileSync(`${MOVELISTS_PATH}/${character.slug}.json`, 'utf-8'),
    );

    const moves = moveList.moves.filter((move) =>
        move.name.startsWith('Sample Combo'),
    );
    console.info(`[Import] Importing ${moves.length} combos.`);

    const inserts = moves.map((move) => {
        return prisma.move.create({
            data: {
                isCombo: true,
                index: move.index,
                name: move.name,
                slug: move.name.replace(/\s/g, '-').toLocaleLowerCase(),
                notation: move.notation,
                damage: move.damage,
                hitLevels: move.hitLevels,
                character: {
                    connect: {
                        id: character.id,
                    },
                },
            },
        });
    });

    console.info(`[Import] Writing combos to database.`);
    const result = await prisma.$transaction([
        prisma.move.deleteMany({
            where: {
                characterId: character.id,
                isCombo: true,
            },
        }),
        ...inserts,
    ]);

    console.info(`[Import] Finished import for ${characterName}.`);
    console.info();

    return result;
}

async function importCombos() {
    if (!process.env.MAINTENANCE_MODE) {
        // console.warn(`Please enable MAINTENANCE_MODE via env to proceed.`);
        // return;
    }

    try {
        await importCombosForCharacter('Akuma');
    } catch (error: any) {
        console.error(`Error importing combos`, error.message);
    }
}

importCombos().catch(console.error.bind(console));

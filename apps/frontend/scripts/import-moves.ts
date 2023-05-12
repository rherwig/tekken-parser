import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const MOVELISTS_PATH = resolve(__dirname, '../../../tools/extractor/.output');

async function importMoves() {
    if (!process.env.MAINTENANCE_MODE) {
        console.warn(`Please enable MAINTENANCE_MODE via env to proceed.`);
        // return;
    }

    await prisma.move.deleteMany();

    const moveLists: any[] = [
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'alisa.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'akuma.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'bob.json'), 'utf-8')),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'bryan.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'asuka.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'devil-jin.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'dragunov.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'eddy.json'), 'utf-8')),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'eliza.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'feng.json'), 'utf-8')),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'gigas.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'heihachi.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'katarina.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'kazuya.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'kazumi.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'hwoarang.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'jack.json'), 'utf-8')),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'jin.json'), 'utf-8')),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'josie.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'king.json'), 'utf-8')),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'kuma.json'), 'utf-8')),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'panda.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'shaheen.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'lars.json'), 'utf-8')),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'yoshimitsu.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'steve.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'nina.json'), 'utf-8')),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'xiaoyu.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'master-raven.json'), 'utf-8'),
        ),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'lucky-chloe.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'leo.json'), 'utf-8')),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'lee.json'), 'utf-8')),
        JSON.parse(
            readFileSync(resolve(MOVELISTS_PATH, 'miguel.json'), 'utf-8'),
        ),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'lili.json'), 'utf-8')),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'law.json'), 'utf-8')),
        JSON.parse(readFileSync(resolve(MOVELISTS_PATH, 'paul.json'), 'utf-8')),
    ];

    for (const moveList of moveLists) {
        // eslint-disable-next-line no-await-in-loop
        const character = await prisma.character.findUnique({
            where: {
                slug: moveList.slug,
            },
        });

        if (!character) {
            console.warn(`Character with slug ${moveList.slug} not found.`);
            continue;
        }

        console.log(`[Import] Starting to import ${character.name}.`);

        for (const move of moveList.moves) {
            console.log(move.name.startsWith('Sample Combo'), move.name);

            if (!move.name.startsWith('Sample Combo')) {
                // eslint-disable-next-line no-await-in-loop
                await prisma.move.create({
                    data: {
                        index: move.index,
                        name: move.name,
                        slug: move.name.replace(/\s/g, '-').toLocaleLowerCase(),
                        notation: move.notation,
                        damage: move.damage,
                        hitLevels: move.hitLevels,
                        isThrow: move.isThrow,
                        character: {
                            connect: {
                                id: character.id,
                            },
                        },
                    },
                });
                continue;
            }

            // eslint-disable-next-line no-await-in-loop
            // await prisma.combo.create({
            //     data: {
            //         name: move.name,
            //         hits: move.hitLevels.length,
            //         damage: move.damage,
            //         notation: move.notation,
            //         character: {
            //             connect: {
            //                 id: character.id,
            //             },
            //         },
            //     },
            // });
        }

        console.log(`[Import] Finished importing ${character.name}.`);
    }
}

importMoves().catch(console.error.bind(console));

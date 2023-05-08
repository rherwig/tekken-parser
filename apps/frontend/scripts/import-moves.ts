import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function importMoves() {
    const movesLists: any[] = [
        // await import('./movelists/alisa.json'),
        // await import('./movelists/akuma.json'),
        // await import('./movelists/bob.json'),
        // await import('./movelists/bryan.json'),
        // await import('./movelists/asuka.json'),
        // await import('./movelists/devil-jin.json'),
        // await import('./movelists/dragunov.json'),
        // await import('./movelists/eddy.json'),
        // await import('./movelists/eliza.json'),
        // await import('./movelists/feng.json'),
        // await import('./movelists/gigas.json'),
        // await import('./movelists/heihachi.json'),
        // await import('./movelists/katarina.json'),
        // await import('./movelists/kazuya.json'),
        // await import('./movelists/kazumi.json'),
        // await import('./movelists/hwoarang.json'),
        // await import('./movelists/jack.json'),
        // await import('./movelists/jin.json'),
        // await import('./movelists/josie.json'),
        // await import('./movelists/king.json'),
        // await import('./movelists/kuma.json'),
        // await import('./movelists/panda.json'),
        // await import('./movelists/shaheen.json'),
        // await import('./movelists/lars.json'),
        // await import('./movelists/yoshimitsu.json'),
        // await import('./movelists/steve.json'),
        // await import('./movelists/nina.json'),
        // await import('./movelists/xiaoyu.json'),
        // await import('./movelists/master-raven.json'),
        // await import('./movelists/lucky-chloe.json'),
        // await import('./movelists/leo.json'),
        // await import('./movelists/lee.json'),
        // await import('./movelists/miguel.json'),
        // await import('./movelists/lili.json'),
        // await import('./movelists/law.json'),
    ];

    const movesList = movesLists.pop();
    if (!movesList) {
        return;
    }

    const character = await prisma.character.findUnique({
        where: {
            slug: movesList.slug,
        },
    });

    if (!character) {
        throw new Error(`Character with slug ${movesList.slug} not found.`);
    }

    console.log(`[Import] Starting to import ${character.name}.`);

    movesList.moves.map(async (move: any) => {
        return prisma.move.create({
            data: {
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
    });
}

importMoves().catch(console.error.bind(console));

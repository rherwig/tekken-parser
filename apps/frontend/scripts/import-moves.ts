import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function importMoves() {
    const movesList = await import('./paul.json');

    const character = await prisma.character.findUnique({
        where: {
            slug: movesList.slug,
        },
    });

    if (!character) {
        throw new Error(`Character with slug ${movesList.slug} not found.`);
    }

    movesList.moves.map(async (move) => {
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

import { prisma } from '../../prisma/client';

export async function findOrCreateCharacter(name: string) {
    const slug = name.replace(/\s/g, '-').toLocaleLowerCase();

    const character = await prisma.character.findUnique({
        where: {
            slug,
        },
    });

    if (character) {
        console.info(`[Import] Character ${name} found.`);
        return character;
    }

    console.info(`[Import] Character ${name} not found. Creating.`);

    return prisma.character.create({
        data: {
            name,
            slug,
            imageUrl: `/images/characters/${slug}.png`,
        },
    });
}

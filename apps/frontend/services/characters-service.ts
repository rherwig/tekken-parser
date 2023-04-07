import { Character, Combo, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type CharacterWithCombos = Character & { combos: Combo[] };

export class CharactersService {
    /**
     * Returns all characters from the database.
     */
    static async findAll() {
        return prisma.character.findMany({
            include: {
                combos: true,
            },
        });
    }

    /**
     * Returns a single character by its slug.
     * @param slug Slug (sanitized name) of the character.
     */
    static async findBySlug(slug: string): Promise<CharacterWithCombos | null> {
        return prisma.character.findUnique({
            where: {
                slug,
            },
            include: {
                combos: true,
            },
        });
    }

    /**
     * Create a new character.
     * @param {Character} data Character data.
     */
    static async create(data: Character) {
        return prisma.character.create({
            data,
        });
    }

    /**
     * Removes a character by its id.
     * @param id Id of the character.
     */
    static async remove(id: string) {
        return prisma.character.delete({
            where: {
                id,
            },
        });
    }
}

import { Character, Combo, PrismaClient, Move } from '@prisma/client';

export type CharacterWithCombos = Character & { combos: Combo[], moves: Move[] };

export class CharactersService {
    private static prisma: PrismaClient | null = null;

    static getPrisma() {
        if (!this.prisma) {
            this.prisma = new PrismaClient();
        }

        return this.prisma;
    }

    /**
     * Returns all characters from the database.
     */
    static async findAll() {
        return this.getPrisma().character.findMany({
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
        return this.getPrisma().character.findUnique({
            where: {
                slug,
            },
            include: {
                combos: true,
                moves: true,
            },
        });
    }

    /**
     * Create a new character.
     * @param {Character} data Character data.
     */
    static async create(data: Character) {
        return this.getPrisma().character.create({
            data,
        });
    }

    /**
     * Removes a character by its id.
     * @param id Id of the character.
     */
    static async remove(id: string) {
        return this.getPrisma().character.delete({
            where: {
                id,
            },
        });
    }
}

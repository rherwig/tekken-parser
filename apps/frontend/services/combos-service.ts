import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export type ComboCreateDto = Omit<Prisma.ComboCreateInput, 'character'>;

export class CombosService {
    static async findByCharacterId(id: string) {
        return prisma.combo.findMany({
            where: {
                characterId: id,
            },
        });
    }

    static async create(characterId: string, data: ComboCreateDto) {
        return prisma.combo.create({
            data: {
                ...data,
                character: {
                    connect: {
                        id: characterId,
                    },
                },
            } satisfies Prisma.ComboCreateInput,
            include: {
                character: true,
            },
        });
    }

    static async remove(id: string) {
        return prisma.combo.delete({
            where: {
                id,
            },
        });
    }
}

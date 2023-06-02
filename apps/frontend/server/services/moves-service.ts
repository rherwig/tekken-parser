import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type MoveCreateDto = Omit<Prisma.MoveCreateInput, 'character'>;

export class MovesService {
    static async findByCharacterId(id: string) {
        return prisma.move.findMany({
            where: {
                characterId: id,
            },
        });
    }

    static async create(characterId: string, data: MoveCreateDto) {
        return prisma.move.create({
            data: {
                ...data,
                character: {
                    connect: {
                        id: characterId,
                    },
                },
            } satisfies Prisma.MoveCreateInput,
            include: {
                character: true,
            },
        });
    }

    static async update(id: string, data: MoveCreateDto) {
        return prisma.move.update({
            where: {
                id,
            },
            data,
        });
    }

    static async remove(id: string) {
        return prisma.move.delete({
            where: {
                id,
            },
        });
    }
}

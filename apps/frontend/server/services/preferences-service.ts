import { Preferences, PrismaClient } from '@prisma/client';

export class PreferencesService {
    private static prisma: PrismaClient | null = null;

    static getPrisma() {
        if (!this.prisma) {
            this.prisma = new PrismaClient();
        }

        return this.prisma;
    }

    /**
     * Returns the user's preferences.
     */
    static async findByUserId(userId: string): Promise<Preferences | null> {
        return this.getPrisma().preferences.findUnique({
            where: {
                userId,
            },
        });
    }
}

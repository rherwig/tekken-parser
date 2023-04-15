import { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';

import { ApiResponse } from '@/types/api-response';
import { isAuthorized } from '@/middlewares/auth';
import { applyMiddlewares } from '@/middlewares/apply-middlewares';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const prisma = new PrismaClient();

/**
 * Sets a user preference and creates it if it doesn't exist.
 * PATCH /api/preferences
 *
 * @param req
 * @param res
 */
async function patch(req: NextApiRequest, res: ApiResponse) {
    try {
        const session = await getServerSession(req, res, authOptions);
        if (!session?.user) {
            return res.status(401).json({
                error: 'Unauthorized.',
                code: 1,
            });
        }

        const { name } = req.query;
        const { value } = req.body;

        if (typeof name !== 'string') {
            return res.status(400).json({
                error: `Invalid preference: ${name}.`,
                code: 10,
            });
        }

        const preference = await prisma.preferences.upsert({
            where: {
                userId: (session.user as any).id,
            },
            update: {
                [name]: value,
            },
            create: {
                [name]: value,
                user: {
                    connect: {
                        id: (session.user as any).id,
                    },
                },
            },
        });

        return res.status(201).json({
            data: preference,
            code: 0,
        });
    } catch (error: any) {
        return res.status(500).json({
            error: error.message,
            code: 1,
        });
    }
}

export default function handler(req: NextApiRequest, res: ApiResponse) {
    switch (req.method) {
        case 'PATCH':
            return applyMiddlewares(isAuthorized)(req, res, patch);
        default:
            break;
    }

    return res.status(405).end();
}

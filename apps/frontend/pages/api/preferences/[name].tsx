import { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';

import { ApiResponse } from '@/types/api-response';
import { isAuthorized } from '@/server/middlewares/auth';
import { applyMiddlewares } from '@/server/middlewares/apply-middlewares';
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

        const preferences = {
            ...session.user.preferences,
            [name]: value,
        };

        await prisma.user.update({
            data: {
                preferences,
            },

            where: {
                id: session.user.id,
            },
        });

        return res.status(201).json({
            data: preferences,
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

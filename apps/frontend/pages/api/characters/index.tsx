import { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';

import { ApiResponse } from '@/types/api-response';
import { isAdmin } from '@/middlewares/auth';
import { applyMiddlewares } from '@/middlewares/apply-middlewares';

const prisma = new PrismaClient();

/**
 * Find all characters.
 * GET /api/characters
 *
 * @param req
 * @param res
 */
async function find(req: NextApiRequest, res: ApiResponse) {
    try {
        const characters = await prisma.character.findMany();

        return res.status(200).json({
            data: characters,
            code: 0,
        });
    } catch (error: any) {
        return res.status(500).json({
            error: error.message,
            code: 1,
        });
    }
}

/**
 * Create a new character.
 * POST /api/characters
 *
 * @param req
 * @param res
 */
async function create(req: NextApiRequest, res: ApiResponse) {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                error: 'Missing property: name',
                code: 10,
            });
        }

        const slug = name.toLowerCase().replace(' ', '-');
        const imageUrl = `/images/characters/${slug}.png`;
        const character = await prisma.character.create({
            data: {
                name,
                slug,
                imageUrl,
            },
        });

        return res.status(201).json({
            data: character,
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
        case 'GET':
            return find(req, res);
        case 'POST':
            return applyMiddlewares(isAdmin)(req, res, create);
        default:
            break;
    }

    return res.status(405).end();
}

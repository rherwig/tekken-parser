import { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';

import { ApiResponse } from '@/types/api-response';

const prisma = new PrismaClient();

async function remove(req: NextApiRequest, res: ApiResponse) {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({
                error: 'Missing property: id',
                code: 10,
            });
        }

        await prisma.character.delete({
            where: {
                id: id.toString(),
            },
        });

        return res.status(201).json({
            data: true,
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
        case 'DELETE':
            return remove(req, res);
        default:
            break;
    }

    return res.status(405).end();
}

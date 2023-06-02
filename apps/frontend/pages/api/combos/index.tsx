import { NextApiRequest } from 'next';

import { ApiResponse } from '@/types/api-response';
import { MovesService } from '@/server/services/moves-service';
import { applyMiddlewares } from '@/server/middlewares/apply-middlewares';
import { isAdmin } from '@/server/middlewares/auth';
import { validate } from '@/server/middlewares/validate';

async function create(req: NextApiRequest, res: ApiResponse) {
    try {
        const { name, notation, damage, characterId, notes } = req.body;

        const combo = await MovesService.create(characterId, {
            slug: name.toLowerCase().replace(/\s/g, '-'),
            damage: damage ? [parseInt(damage, 10)] : [],
            name,
            notation,
            notes,
        });

        return res.status(201).json({
            data: combo,
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
        case 'POST':
            return applyMiddlewares(isAdmin, validate(['notation', 'name']))(
                req,
                res,
                create,
            );
        default:
            break;
    }

    return res.status(405).end();
}

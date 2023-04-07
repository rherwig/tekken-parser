import { NextApiRequest } from 'next';

import { ApiResponse } from '@/types/api-response';
import { CombosService } from '@/services/combos-service';
import { applyMiddlewares } from '@/middlewares/apply-middlewares';
import { isAdmin } from '@/middlewares/auth';
import { validate } from '@/middlewares/validate';

async function create(req: NextApiRequest, res: ApiResponse) {
    try {
        const { name, notation, hits, damage, characterId, notes } = req.body;

        const combo = await CombosService.create(characterId, {
            name,
            notation,
            hits,
            damage,
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

import { NextApiRequest } from 'next';

import { ApiResponse } from '@/types/api-response';
import { applyMiddlewares } from '@/server/middlewares/apply-middlewares';
import { isAdmin } from '@/server/middlewares/auth';
import { CombosService } from '@/server/services/combos-service';

async function update(req: NextApiRequest, res: ApiResponse) {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({
                error: 'Missing property: id',
                code: 10,
            });
        }

        const { name, notation, damage, hits, notes } = req.body;
        if (!name || !notation) {
            return res.status(400).json({
                error: 'Missing properties: name, notation',
                code: 10,
            });
        }

        const combo = await CombosService.update(id.toString(), {
            name,
            notation,
            damage,
            hits,
            notes,
        });

        return res.status(200).json({
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

/**
 * Remove a combo by id.
 * DELETE /api/combos/:id
 *
 * @param req
 * @param res
 */
async function remove(req: NextApiRequest, res: ApiResponse) {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({
                error: 'Missing property: id',
                code: 10,
            });
        }

        await CombosService.remove(id.toString());

        return res.status(200).json({
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
        case 'PUT':
            return applyMiddlewares(isAdmin)(req, res, update);
        case 'DELETE':
            return applyMiddlewares(isAdmin)(req, res, remove);
        default:
            break;
    }

    return res.status(405).end();
}

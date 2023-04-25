import { NextApiRequest } from 'next';

import { ApiResponse } from '@/types/api-response';
import { applyMiddlewares } from '@/server/middlewares/apply-middlewares';
import { isAdmin } from '@/server/middlewares/auth';
import { CharactersService } from '@/server/services/characters-service';

/**
 * Remove a character by id.
 * DELETE /api/characters/:id
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

        await CharactersService.remove(id.toString());

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
        case 'DELETE':
            return applyMiddlewares(isAdmin)(req, res, remove);
        default:
            break;
    }

    return res.status(405).end();
}

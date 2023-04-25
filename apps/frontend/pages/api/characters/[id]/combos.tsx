import { NextApiRequest } from 'next';

import { ApiResponse } from '@/types/api-response';
import { CombosService } from '@/server/services/combos-service';

/**
 * Remove a character by id.
 * DELETE /api/characters/:id
 *
 * @param req
 * @param res
 */
async function findByCharacter(req: NextApiRequest, res: ApiResponse) {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({
                error: 'Missing property: id',
                code: 10,
            });
        }

        const combos = await CombosService.findByCharacterId(id.toString());

        return res.status(201).json({
            data: combos,
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
            return findByCharacter(req, res);
        default:
            break;
    }

    return res.status(405).end();
}

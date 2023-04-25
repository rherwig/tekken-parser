import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { NextApiMiddleware } from '@/server/middlewares/apply-middlewares';

export function validate(properties: string[]): NextApiMiddleware {
    return (
        req: NextApiRequest,
        res: NextApiResponse,
        next: NextApiHandler,
    ) => {
        const missingProperties = properties.filter(
            (property) => !req.body[property],
        );

        if (missingProperties.length > 0) {
            return res.status(400).json({
                error: `Missing properties: ${missingProperties.join(', ')}.`,
                code: 10,
            });
        }

        return next(req, res);
    };
}

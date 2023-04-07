import { getServerSession } from 'next-auth';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function isAdmin(
    req: NextApiRequest,
    res: NextApiResponse,
    next: NextApiHandler,
) {
    const session = await getServerSession(req, res, authOptions);

    if (session?.user.role !== 'ADMIN') {
        return res.status(403).json({
            error: 'Missing administator role.',
            code: 2,
        });
    }

    return next(req, res);
}

export async function isAuthorized(
    req: NextApiRequest,
    res: NextApiResponse,
    next: NextApiHandler,
) {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user) {
        return res.status(401).json({
            error: 'Unauthorized.',
            code: 3,
        });
    }

    return next(req, res);
}

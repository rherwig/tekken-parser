// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

interface JsonResponse<T = any> {
    code: number;
    data: T;
    error?: any;
}

function login(req: NextApiRequest, res: NextApiResponse<Data>) {
    return res.status(200).json({ name: 'John Doe' });
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === 'POST') {
        return login(req, res);
    }

    return res.status(405).end();
}

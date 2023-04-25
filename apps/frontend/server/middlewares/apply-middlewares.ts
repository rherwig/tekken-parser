import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export declare type NextApiMiddleware<T = any> = (
    req: NextApiRequest,
    res: NextApiResponse<T>,
    next: NextApiHandler<T>,
) => unknown | Promise<unknown>;

export function applyMiddlewares(...middlewares: NextApiMiddleware[]) {
    return async (
        req: NextApiRequest,
        res: NextApiResponse,
        handler: NextApiHandler,
    ) => {
        const middleware = middlewares.shift();

        if (middleware) {
            await middleware(req, res, () =>
                applyMiddlewares(...middlewares)(req, res, handler),
            );
        } else {
            await handler(req, res);
        }
    };
}

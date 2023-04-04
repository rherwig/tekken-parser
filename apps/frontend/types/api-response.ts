import { NextApiResponse } from 'next';

export interface JsonResponse<T = any> {
    code: number;
    data?: T;
    error?: any;
}

export type ApiResponse = NextApiResponse<JsonResponse>;

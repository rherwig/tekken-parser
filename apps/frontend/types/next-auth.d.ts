import { DefaultSession } from 'next-auth';
import { Preferences } from '@prisma/client';

declare module 'next-auth' {
    interface Session {
        user: {
            role: 'ADMIN' | 'USER';
            preferences?: Preferences;
        } & DefaultSession['user'];
    }

    interface User {
        role: 'ADMIN' | 'USER';
        preferences?: Preferences;
    }
}

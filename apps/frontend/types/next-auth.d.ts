import { DefaultSession } from 'next-auth';
import { Preferences, User as UserModel } from '@prisma/client';

declare module 'next-auth' {
    interface Session {
        user: UserModel & {
            preferences?: Preferences;
        };
    }

    interface User extends UserModel {
        preferences?: Preferences;
    }
}

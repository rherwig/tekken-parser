import { useSession } from 'next-auth/react';

export const useAuth = () => {
    const session = useSession();
    const user = session?.data?.user;

    const isAuthenticated = () => {
        return Boolean(user);
    };

    const isAdmin = () => {
        if (!isAuthenticated()) {
            return false;
        }

        return user?.role === 'ADMIN';
    };

    return {
        isAuthenticated,
        isAdmin,
        user,
    };
};

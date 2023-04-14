import { Session } from 'next-auth';

export const useAuth = (session: Session | null) => {
    const user = session?.user;

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

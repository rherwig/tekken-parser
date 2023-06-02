import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { prisma } from '@/prisma/client';

const createGithubProvider = () => {
    const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
    const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error(`Missing Github OAuth credentials.`);
    }

    return GithubProvider({
        clientId,
        clientSecret,
    });
};

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [createGithubProvider()],
    callbacks: {
        async session({ session, user }) {
            session.user = user as any;

            return session;
        },
    },
};

export default NextAuth(authOptions);

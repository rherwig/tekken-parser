import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [createGithubProvider()],
    callbacks: {
        session({ session, token, user }) {
            session.user = user;

            return session;
        },
    },
});

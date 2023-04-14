import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';

import '@/assets/css/main.css';

import { Session } from 'next-auth';

import TheHeader from '@/layouts/components/header/the-header';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const metadata = {
    title: 'Tekken Space',
    description:
        'Find combos, frame data, and more for your favorite Tekken characters. Easy to use and free forever.',
};

interface Props {
    children: ReactNode;
    session: Session;
}

export default async function RootLayout(props: Props) {
    const session = await getServerSession(authOptions);

    return (
        <html lang={'en'}>
            <body>
                <TheHeader session={session} />
                {props.children}
            </body>
        </html>
    );
}

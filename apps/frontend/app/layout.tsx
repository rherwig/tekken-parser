import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';

import '@/assets/css/main.css';

import TheHeader from '@/components/header/the-header';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { store } from '@/store';
import { setCurrentUser } from '@/store/slices/users-slice';
import Preloader from '@/components/preloader';
import AppStoreProvider from '@/store/provider';
import { CharactersService } from '@/server/services/characters-service';
import { setCharacters } from '@/store/slices/characters-slice';

export const metadata = {
    title: 'Tekken Space',
    description:
        'Find combos, frame data, and more for your favorite Tekken characters. Easy to use and free forever.',
};

interface Props {
    children: ReactNode;
}

export default async function RootLayout(props: Props) {
    const session = await getServerSession(authOptions);
    const characters = await CharactersService.findAll();

    store.dispatch(setCurrentUser(session?.user ?? null));
    store.dispatch(setCharacters(characters ?? []));

    return (
        <html lang={'en'}>
            <body>
                <AppStoreProvider>
                    <Preloader
                        session={session}
                        characters={characters}
                    />
                    <TheHeader user={session?.user ?? null} />

                    {props.children}
                </AppStoreProvider>
            </body>
        </html>
    );
}

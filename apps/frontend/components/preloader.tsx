'use client';

import { Session } from 'next-auth';
import { Character } from '@prisma/client';

import { store } from '@/store';
import { setCurrentUser } from '@/store/slices/users-slice';
import { setCharacters } from '@/store/slices/characters-slice';

interface Props {
    session: Session | null;
    characters: Character[];
}

/**
 * This component is used to dispatch the initial state of the redux store for usage in client-components.
 * This is necessary because the redux next wrapper does not work with the `app/` directory, yet.
 * @param {Props} props
 * @constructor
 */
export default function Preloader(props: Props): null {
    store.dispatch(setCurrentUser(props.session?.user ?? null));
    store.dispatch(setCharacters(props.characters));

    return null;
}

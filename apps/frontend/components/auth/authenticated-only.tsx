import { ReactNode } from 'react';
import { Session } from 'next-auth';

import { selectCurrentUser } from '@/store/slices/users-slice';
import { store } from '@/store';

interface Props {
    children: ReactNode;
}

export default function AuthenticatedOnly(props: Props) {
    const currentUser = selectCurrentUser(store.getState());

    return currentUser !== null ? props.children : null;
}

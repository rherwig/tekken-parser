import { ReactNode } from 'react';

import { selectCurrentUser } from '@/store/slices/users-slice';
import { store } from '@/store';

interface Props {
    children: ReactNode;
}

export default function AdminOnly(props: Props) {
    const currentUser = selectCurrentUser(store.getState());

    const isAdmin = currentUser?.role === 'ADMIN';

    return isAdmin ? <>{props.children}</> : null;
}

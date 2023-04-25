import React, { ReactNode } from 'react';

import { selectCurrentUser } from '@/store/slices/users-slice';
import { store } from '@/store';

interface Props {
    children: ReactNode;
}

export default function GuestOnly(props: Props) {
    const currentUser = selectCurrentUser(store.getState());

    return currentUser !== null ? null : <>{props.children}</>;
}

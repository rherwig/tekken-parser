import React, { ReactNode } from 'react';
import { Session } from 'next-auth';

import { useAuth } from '@/hooks/auth';

interface Props {
    session: Session | null;
    children: ReactNode;
}

export default function GuestOnly(props: Props) {
    const { isAuthenticated } = useAuth(props.session);

    return isAuthenticated() ? null : <>{props.children}</>;
}

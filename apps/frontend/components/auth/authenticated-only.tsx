import { ReactNode } from 'react';
import { Session } from 'next-auth';

import { useAuth } from '@/hooks/auth';

interface Props {
    session: Session | null;
    children: ReactNode;
}

export default function AuthenticatedOnly(props: Props) {
    const { isAuthenticated } = useAuth(props.session);

    return isAuthenticated() ? props.children : null;
}

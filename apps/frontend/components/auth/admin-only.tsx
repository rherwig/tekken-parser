import { ReactNode } from 'react';
import { Session } from 'next-auth';

import { useAuth } from '@/hooks/auth';

interface Props {
    session: Session | null;
    children: ReactNode;
}

export default function AdminOnly(props: Props) {
    const { isAdmin } = useAuth(props.session);

    return isAdmin() ? <>{props.children}</> : null;
}

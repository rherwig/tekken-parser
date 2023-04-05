import React from 'react';

import { useAuth } from '@/hooks/auth';

export default function AdminOnly(props: { children: React.ReactNode }) {
    const { isAdmin } = useAuth();

    return isAdmin() ? <>{props.children}</> : null;
}

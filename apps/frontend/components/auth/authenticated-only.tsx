import React from 'react';

import { useAuth } from '@/hooks/auth';

export default function AuthenticatedOnly(props: {
    children: React.ReactNode;
}) {
    const { isAuthenticated } = useAuth();

    return isAuthenticated() ? props.children : null;
}

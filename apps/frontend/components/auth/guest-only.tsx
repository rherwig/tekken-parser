import React from 'react';

import { useAuth } from '@/hooks/auth';

export default function GuestOnly(props: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();

    return isAuthenticated() ? null : <>{props.children}</>;
}

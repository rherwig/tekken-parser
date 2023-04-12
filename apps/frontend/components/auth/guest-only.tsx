import React from 'react';

import { useAuth } from '@/hooks/auth';

export default function GuestOnly(props: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuth();

    return isAuthenticated() || isLoading() ? null : <>{props.children}</>;
}

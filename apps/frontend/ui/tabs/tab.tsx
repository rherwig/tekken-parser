'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'classnames';
import { usePathname } from 'next/navigation';

interface Props {
    children: ReactNode;
    href?: string;
    segment?: string;
}

export default function TsTab(props: Props) {
    const path = usePathname();
    const isActive = props.segment && path?.endsWith(props.segment);

    const className = clsx(
        'rounded-md px-4 py-2 text-center transition-colors',
        {
            'bg-zinc-800 hover:bg-zinc-950': !isActive,
            'bg-teal-500 text-zinc-900': isActive,
        },
    );

    return (
        <Link
            href={props.href ?? '#'}
            className={className}
        >
            {props.children}
        </Link>
    );
}

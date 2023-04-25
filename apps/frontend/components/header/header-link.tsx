import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
    href: string;
    children: ReactNode;
}

export default function HeaderLink({ href, children }: Props) {
    return (
        <Link
            href={href}
            className="flex h-full items-center px-8 text-zinc-50 transition-colors hover:bg-black/20"
        >
            {children}
        </Link>
    );
}

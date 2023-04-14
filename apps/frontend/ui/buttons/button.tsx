import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    is?: 'button' | 'a';
    href?: string;
}

export default function TsButton({ children, ...props }: Props) {
    if (props.is === 'a' && props.href) {
        return (
            <Link
                href={props.href}
                className="inline-flex justify-center rounded-md border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium text-teal-900 no-underline transition-colors hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            onClick={props.onClick}
            type={props.type || 'button'}
            className="inline-flex justify-center rounded-md border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium text-teal-900 transition-colors hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        >
            {children}
        </button>
    );
}

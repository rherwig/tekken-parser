import clsx from 'classnames';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    color?: 'red' | 'blue' | 'green' | 'yellow' | 'gray';
}

export default function TsTag({ children, color, className }: Props) {
    const colorSchemes = {
        red: 'bg-red-800 text-red-100',
        blue: 'bg-blue-800 text-blue-100',
        green: 'bg-green-800 text-green-100',
        yellow: 'bg-yellow-800 text-yellow-100',
        gray: 'bg-black/40 text-zinc-300',
    };

    return (
        <span
            className={clsx(
                'rounded-md px-3 py-1 text-sm',
                colorSchemes[color || 'gray'],
                className,
            )}
        >
            {children}
        </span>
    );
}

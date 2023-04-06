import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

export default function TsButton({ children, ...props }: Props) {
    return (
        <button
            type={props.type || 'button'}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 transition-colors hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
            {children}
        </button>
    );
}

import Link from 'next/link';

import HeaderLink from '@/layouts/components/header/header-link';
import GuestOnly from '@/components/auth/guest-only';

export default function TheHeader() {
    return (
        <header className="mb-8 h-20 shadow-md">
            <div className="container flex h-full justify-between">
                <div className="flex h-full">
                    <div className="-ml-8 h-full">
                        <HeaderLink href={'/'}>
                            <span className={'font-bold text-zinc-50'}>
                                Tekken Space
                            </span>
                        </HeaderLink>
                    </div>
                    <nav className="h-full">
                        <ul className="h-full">
                            <li className="flex h-full">
                                <HeaderLink href={'/characters'}>
                                    Characters
                                </HeaderLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center">
                    <GuestOnly>
                        <Link
                            href={'/api/auth/signin'}
                            className="inline-flex justify-center rounded-md border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium text-teal-900 transition-colors hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                        >
                            Sign In
                        </Link>
                    </GuestOnly>
                </div>
            </div>
        </header>
    );
}

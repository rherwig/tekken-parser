'use client';

import Link from 'next/link';
import { Session } from 'next-auth';
import { Preferences } from '@prisma/client';
import { useState } from 'react';

import HeaderLink from '@/layouts/components/header/header-link';
import GuestOnly from '@/components/auth/guest-only';
import TsDropdown, { DropdownOption } from '@/ui/dropdowns/dropdown';

interface Props {
    session: Session | null;
}

export default function TheHeader(props: Props) {
    const layouts = [
        {
            label: 'Arcade',
            value: 'ARCADE',
        },
        {
            label: 'Gamepad',
            value: 'GAMEPAD',
        },
    ];

    const preferredLayoutIndex = layouts.findIndex(
        (layout) => layout.value === props.session?.user?.preferences?.layout,
    );

    const layoutIndex = preferredLayoutIndex > -1 ? preferredLayoutIndex : 0;

    const [selectedLayout, setSelectedLayout] = useState(layouts[layoutIndex]);

    const handleLayoutChange = async (option: DropdownOption) => {
        setSelectedLayout(option);

        try {
            await fetch(`/api/preferences/layout`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    value: option.value,
                }),
            });
        } catch (error: any) {
            console.error(error);
        }
    };

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
                        <ul className="flex h-full">
                            <li className="flex h-full">
                                <HeaderLink href={'/characters'}>
                                    Characters
                                </HeaderLink>
                            </li>
                            <li className="flex h-full">
                                <HeaderLink href={'/share'}>
                                    Share Combo
                                </HeaderLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center">
                    <TsDropdown
                        className={'min-w-[150px]'}
                        options={layouts}
                        selected={selectedLayout}
                        onChange={handleLayoutChange}
                    />

                    <GuestOnly session={props.session}>
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

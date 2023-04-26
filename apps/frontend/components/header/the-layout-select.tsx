'use client';

import { useState } from 'react';
import { User } from 'next-auth';
import { ControllerLayout } from '@prisma/client';

import TsDropdown, { DropdownOption } from '@/ui/dropdowns/dropdown';
import { useAppDispatch } from '@/hooks/dispatch';
import { updateUserPreferences } from '@/store/slices/users-slice';

interface Props {
    user: User | null;
}

export default function TheLayoutSelect(props: Props) {
    const dispatch = useAppDispatch();
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
        (layout) => layout.value === props.user?.preferences?.layout,
    );

    const layoutIndex = preferredLayoutIndex > -1 ? preferredLayoutIndex : 0;

    const [selectedLayout, setSelectedLayout] = useState(layouts[layoutIndex]);

    const handleLayoutChange = async (option: DropdownOption) => {
        setSelectedLayout(option);

        try {
            dispatch(
                updateUserPreferences({
                    name: 'layout',
                    value: option.value as ControllerLayout,
                }),
            );

            if (!props.user) {
                return;
            }

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
        <TsDropdown
            className={'min-w-[150px]'}
            options={layouts}
            selected={selectedLayout}
            onChange={handleLayoutChange}
        />
    );
}
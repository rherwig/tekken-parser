'use client';

import type { TekkenInstruction } from '@tekken-space/notation-parser';
import { TekkenInstructionType } from '@tekken-space/notation-parser';
import Image from 'next/image';
import { ControllerLayout } from '@prisma/client';
import { useSelector } from 'react-redux';

import { selectUserPreferences } from '@/store/slices/users-slice';

interface Props {
    instruction: TekkenInstruction;
    layout?: ControllerLayout;
}

export default function Instruction(props: Props) {
    const preferences = useSelector(selectUserPreferences);
    const layout = preferences?.layout ?? ControllerLayout.ARCADE;

    let typePath = layout.toLowerCase();

    switch (props.instruction.type) {
        case TekkenInstructionType.MOVE:
            typePath = 'movement';
            break;
        case TekkenInstructionType.ACTION:
            typePath = layout.toLowerCase();
            break;
        default:
            break;
    }

    const imageUrl = `/icons/${typePath}/${props.instruction.slug.toLowerCase()}.svg`;

    return (
        <div className={'flex flex-col items-center gap-2'}>
            {props.instruction.type !== TekkenInstructionType.UNKNOWN ? (
                <Image
                    src={imageUrl}
                    alt={props.instruction.slug}
                    width={32}
                    height={32}
                    className={'mx-1 h-12 w-12'}
                />
            ) : (
                <div className={'flex h-12 items-center'}>
                    <div
                        className={
                            'mx-2 rounded-sm bg-black/50 px-2 py-1 text-xs font-bold uppercase'
                        }
                    >
                        {props.instruction.slug}
                    </div>
                </div>
            )}
        </div>
    );
}

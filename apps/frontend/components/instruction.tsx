'use client';

import type { TekkenInstruction } from '@tekken-space/notation-parser';
import { TekkenInstructionType } from '@tekken-space/notation-parser';
import { ControllerLayout } from '@prisma/client';
import { useSelector } from 'react-redux';

import { selectUserPreferences } from '@/store/slices/users-slice';
import ActionControls from '@/components/controls/action-controls';
import MovementControls from '@/components/controls/movement-controls';

interface Props {
    instruction: TekkenInstruction;
    layout?: ControllerLayout;
}

export default function Instruction(props: Props) {
    const preferences = useSelector(selectUserPreferences);
    const scheme = preferences?.layout ?? ControllerLayout.GAMEPAD;

    return (
        <div className={'flex flex-col items-center gap-2'}>
            {props.instruction.type === TekkenInstructionType.UNKNOWN && (
                <div className={'flex h-full items-center'}>
                    <div
                        className={
                            'mx-2 rounded-sm bg-black/50 px-2 py-1 text-xs font-bold uppercase'
                        }
                    >
                        {props.instruction.slug}
                    </div>
                </div>
            )}

            {props.instruction.type === TekkenInstructionType.ACTION && (
                <ActionControls
                    scheme={scheme}
                    inputs={props.instruction.inputs}
                />
            )}

            {props.instruction.type === TekkenInstructionType.MOVE && (
                <MovementControls slug={props.instruction.slug} />
            )}
        </div>
    );
}

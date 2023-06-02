'use client';

import type { TekkenInstruction } from '@tekken-space/notation-parser';
import { TekkenInstructionType } from '@tekken-space/notation-parser';
import { useSelector } from 'react-redux';

import { selectUserPreferences } from '@/store/slices/users-slice';
import ActionControls from '@/components/controls/action-controls';
import MovementControls from '@/components/controls/movement-controls';

export enum ControllerLayout {
    UNKNOWN = 'UNKNOWN',
    GAMEPAD = 'GAMEPAD',
    XBOX = 'XBOX',
    PLAYSTATION = 'PLAYSTATION',
    ARCADE = 'ARCADE',
    HITBOX = 'HITBOX',
}

interface Props {
    instruction: TekkenInstruction;
}

export default function Instruction(props: Props) {
    const preferences = useSelector(selectUserPreferences);
    const scheme = preferences?.controllerLayout ?? ControllerLayout.GAMEPAD;

    const instructionText = props.instruction.notation.replace(/"/g, '');

    if (props.instruction.type === TekkenInstructionType.HIDDEN) {
        return null;
    }

    return (
        <div className={'flex flex-col items-center gap-2'}>
            {props.instruction.type === TekkenInstructionType.UNKNOWN && (
                <div className={'flex h-full items-center'}>
                    <div
                        className={
                            'mx-2 rounded-sm bg-black/50 px-2 py-1 text-xs font-bold uppercase'
                        }
                    >
                        {instructionText}
                    </div>
                </div>
            )}

            {props.instruction.type === TekkenInstructionType.CONTROL && (
                <div className={'flex h-full items-center'}>
                    <div
                        className={
                            'mx-2 mb-3 rounded-sm text-4xl font-bold uppercase leading-none'
                        }
                    >
                        {instructionText}
                    </div>
                </div>
            )}

            {props.instruction.type === TekkenInstructionType.ACTION && (
                <ActionControls
                    scheme={scheme}
                    inputs={props.instruction.inputs}
                />
            )}

            {props.instruction.type === TekkenInstructionType.MOVEMENT && (
                <MovementControls slug={props.instruction.slug} />
            )}
        </div>
    );
}

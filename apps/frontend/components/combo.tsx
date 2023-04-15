'use client';

import { FC, useState } from 'react';
import type { Combo as ComboModel } from '@prisma/client';
import { parse } from '@tekken-tools/parser';
import { TbTrashX, TbPencil } from 'react-icons/tb';
import { Session } from 'next-auth';

import Move from '@/components/move';
import DeleteConfirmationDialog from '@/ui/dialogs/delete-confirmation-dialog';
import TsTag from '@/ui/tags/tag';
import CreateComboModal from '@/components/combos/create-combo-modal';
import AdminOnly from '@/components/auth/admin-only';

interface Props {
    combo?: ComboModel;
    notation: string;
    onDelete?: (combo: ComboModel) => Promise<void>;
    onEdit?: (combo: ComboModel) => Promise<void>;
    session?: Session | null;
}

const Combo: FC<Props> = (props) => {
    const [showComboDeleteConfirmation, setShowComboDeleteConfirmation] =
        useState(false);
    const [showComboEditModal, setShowComboEditModal] = useState(false);
    const combo = parse(props.notation);

    const layout = props.session?.user?.preferences?.layout ?? undefined;

    const handleDeleteConfirm = async () => {
        await props.onDelete!(props.combo!);
        setShowComboDeleteConfirmation(false);
    };

    const handleEditSuccess = async (comboModel: ComboModel) => {
        await props.onEdit!(comboModel);
        setShowComboEditModal(false);
    };

    return (
        <div className="mb-4 bg-black/20 pl-5 pr-2 pt-2 pb-4">
            <div className="flex w-full items-center justify-between">
                <div className="font-bold text-zinc-200">
                    {props.combo?.name}
                </div>

                <div className={'flex gap-1'}>
                    {props.onEdit && props.combo && (
                        <AdminOnly session={props.session ?? null}>
                            <button
                                className="rounded-full p-2 text-sm transition-colors hover:bg-white/10"
                                type={'button'}
                                onClick={() => setShowComboEditModal(true)}
                            >
                                <TbPencil
                                    size={'20'}
                                    className={'hover:stroke-teal-400'}
                                />
                            </button>

                            <DeleteConfirmationDialog
                                content={
                                    'Are you sure you want to remove this combo? This action cannot be undone.'
                                }
                                isOpen={showComboDeleteConfirmation}
                                onConfirm={handleDeleteConfirm}
                                onCancel={() =>
                                    setShowComboDeleteConfirmation(false)
                                }
                            />
                        </AdminOnly>
                    )}

                    {props.onDelete && props.combo && (
                        <AdminOnly session={props.session ?? null}>
                            <button
                                className="rounded-full p-2 text-sm transition-colors hover:bg-white/10"
                                type={'button'}
                                onClick={() =>
                                    setShowComboDeleteConfirmation(true)
                                }
                            >
                                <TbTrashX
                                    size={'20'}
                                    className={'hover:stroke-red-400'}
                                />
                            </button>

                            <DeleteConfirmationDialog
                                content={
                                    'Are you sure you want to remove this combo? This action cannot be undone.'
                                }
                                isOpen={showComboDeleteConfirmation}
                                onConfirm={handleDeleteConfirm}
                                onCancel={() =>
                                    setShowComboDeleteConfirmation(false)
                                }
                            />
                        </AdminOnly>
                    )}
                </div>

                {props.onEdit && props.combo && (
                    <>
                        <CreateComboModal
                            initialValues={props.combo}
                            characterId={props.combo.characterId}
                            isOpen={showComboEditModal}
                            onSuccess={handleEditSuccess}
                            onClose={() => setShowComboEditModal(false)}
                        />
                    </>
                )}
            </div>

            <div className="flex min-h-[5rem] py-4">
                {combo.moves.map((move, index) => {
                    return (
                        <Move
                            key={index}
                            move={move}
                            layout={layout}
                        />
                    );
                })}
            </div>

            <div className="flex items-center gap-2 text-zinc-50">
                {props.combo?.damage && (
                    <TsTag color={'red'}>{props.combo?.damage} Damage</TsTag>
                )}

                {props.combo?.hits && (
                    <TsTag>
                        {props.combo?.hits} Hit
                        {props.combo?.hits > 1 ? 's' : ''}
                    </TsTag>
                )}
            </div>
        </div>
    );
};

export default Combo;

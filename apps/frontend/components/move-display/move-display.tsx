'use client';

import { useEffect, useState } from 'react';
import type { Move as MoveModel } from '@prisma/client';
import {
    parseTekkenNotation,
    TekkenCombo,
    TekkenMove,
} from '@tekken-space/notation-parser';
import { TbPencil, TbTrashX } from 'react-icons/tb';

import Move from '@/components/move-display/move';
import DeleteConfirmationDialog from '@/ui/dialogs/delete-confirmation-dialog';
import CreateComboModal from '@/components/combos/create-combo-modal';
import AdminOnly from '@/components/auth/admin-only';
import MoveInformation from '@/components/move-display/move-information';

interface Props {
    move?: MoveModel;
    notation: string;
    onDelete?: (move: MoveModel) => Promise<void>;
    onEdit?: (move: MoveModel) => Promise<void>;
}

export default function MoveDisplay(props: Props) {
    const [combo, setCombo] = useState<TekkenCombo | null>(null);
    const [showComboDeleteConfirmation, setShowComboDeleteConfirmation] =
        useState(false);
    const [showComboEditModal, setShowComboEditModal] = useState(false);

    useEffect(() => {
        let nextCombo = combo;

        try {
            nextCombo = parseTekkenNotation(props.notation);
        } catch (error: any) {
            // TODO: handle syntax errors emitted by antlr.
        }

        setCombo(nextCombo);
    }, [props.notation]);

    const handleDeleteConfirm = async () => {
        await props.onDelete!(props.move!);
        setShowComboDeleteConfirmation(false);
    };

    const handleEditSuccess = async (move: MoveModel) => {
        await props.onEdit!(move);
        setShowComboEditModal(false);
    };

    return (
        <div className="mb-4 bg-black/20 px-5 pt-2 pb-4">
            <div className="flex w-full items-center justify-between">
                <div className="font-bold text-zinc-200">
                    {props.move?.name}
                </div>

                <div className={'flex gap-1'}>
                    {props.onEdit && props.move && (
                        <AdminOnly>
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

                    {props.onDelete && props.move && (
                        <AdminOnly>
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

                {props.onEdit && props.move && (
                    <>
                        <CreateComboModal
                            initialValues={props.move}
                            characterId={props.move.characterId}
                            isOpen={showComboEditModal}
                            onSuccess={handleEditSuccess}
                            onClose={() => setShowComboEditModal(false)}
                        />
                    </>
                )}
            </div>

            <div className="flex min-h-[5.5rem] flex-1 flex-wrap gap-y-2 py-4">
                {combo !== null &&
                    combo.moves.map((move: TekkenMove, index: number) => {
                        return (
                            <Move
                                key={index}
                                move={move}
                            />
                        );
                    })}
            </div>

            {props.move && <MoveInformation move={props.move} />}
        </div>
    );
}

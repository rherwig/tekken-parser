import { FC, useState } from 'react';
import type { Combo as ComboModel } from '@prisma/client';
import { parse } from '@tekken-tools/parser';

import Move from '@/components/move';
import DeleteConfirmationDialog from '@/ui/dialogs/delete-confirmation-dialog';

interface Props {
    combo?: ComboModel;
    notation: string;
    onDelete?: (combo: ComboModel) => Promise<void>;
}

const Combo: FC<Props> = (props) => {
    const [showComboDeleteConfirmation, setShowComboDeleteConfirmation] =
        useState(false);
    const combo = parse(props.notation);

    const handleDeleteConfirm = async () => {
        await props.onDelete!(props.combo!);
        setShowComboDeleteConfirmation(false);
    };

    return (
        <div className="mb-4 bg-black/20">
            <div className="min-h-8 flex w-full items-center justify-between px-4 py-2">
                <div className="font-bold text-zinc-200">
                    {props.combo?.name}
                </div>

                {props.onDelete && props.combo && (
                    <>
                        <button
                            className="text-sm"
                            type={'button'}
                            onClick={() => setShowComboDeleteConfirmation(true)}
                        >
                            Delete
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
                    </>
                )}
            </div>

            <div className="flex min-h-[5rem] p-4">
                {combo.moves.map((move, index) => {
                    return (
                        <Move
                            key={index}
                            move={move}
                        />
                    );
                })}
            </div>

            <div className="min-h-8 flex items-center gap-2 px-4 py-2"></div>
        </div>
    );
};

export default Combo;

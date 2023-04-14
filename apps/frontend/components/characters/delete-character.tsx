import { Character } from '@prisma/client';
import { useState } from 'react';

import DeleteConfirmationDialog from '@/ui/dialogs/delete-confirmation-dialog';

interface Props {
    character: Character;
    onConfirm: () => void;
}

export default function DeleteCharacter(props: Props) {
    const [showDeleteConfirmation, setShowDeleteConfirmation] =
        useState<boolean>(false);

    return (
        <>
            <button
                type={'button'}
                onClick={() => setShowDeleteConfirmation(true)}
                className="inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-red-900 transition-colors hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
                Delete Character
            </button>

            <DeleteConfirmationDialog
                content={`Are you sure you want to delete ${props.character.name}? This action cannot be undone.`}
                isOpen={showDeleteConfirmation}
                onConfirm={props.onConfirm}
                onCancel={() => setShowDeleteConfirmation(false)}
            />
        </>
    );
}

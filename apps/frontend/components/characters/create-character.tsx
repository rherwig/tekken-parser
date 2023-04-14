'use client';

import { useState } from 'react';
import { Character } from '@prisma/client';

import CreateCharacterModal from '@/components/characters/create-character-modal';

interface Props {
    onSuccess: (character: Character) => void;
}

export default function CreateCharacter(props: Props) {
    const [isCreateModelOpen, setIsCreateModalOpen] = useState<boolean>(false);

    const handleSuccess = (character: Character) => {
        props.onSuccess(character);
        setIsCreateModalOpen(false);
    };

    return (
        <>
            <button
                type={'button'}
                className="inline-flex justify-center rounded-md border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium text-teal-900 transition-colors hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                onClick={() => setIsCreateModalOpen(true)}
            >
                Create Character
            </button>

            <CreateCharacterModal
                isOpen={isCreateModelOpen}
                onSuccess={handleSuccess}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </>
    );
}

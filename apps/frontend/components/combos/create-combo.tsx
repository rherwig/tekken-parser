'use client';

import { Session } from 'next-auth';
import { useState } from 'react';
import { Combo } from '@prisma/client';

import TsButton from '@/ui/buttons/button';
import CreateComboModal from '@/components/combos/create-combo-modal';

interface Props {
    session: Session | null;
    characterId: string;
    onSuccess: (combo: Combo) => void;
}

export default function CreateCombo(props: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleComboCreated = async (combo: Combo) => {
        props.onSuccess(combo);
        setIsModalOpen(false);
    };

    return (
        <>
            <TsButton onClick={() => setIsModalOpen(true)}>Add Combo</TsButton>

            <CreateComboModal
                characterId={props.characterId}
                isOpen={isModalOpen}
                onSuccess={handleComboCreated}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

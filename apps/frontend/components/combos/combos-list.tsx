'use client';

import { Character, Move } from '@prisma/client';
import { useState } from 'react';
import { Session } from 'next-auth';

import CreateCombo from '@/components/combos/create-combo';
import AdminOnly from '@/components/auth/admin-only';
import MoveDisplay from '@/components/move-display/move-display';

interface Props {
    session: Session | null;
    character: Character;
    moves: Move[];
}

export default function CombosList(props: Props) {
    const [combos, setCombos] = useState<Move[]>(props.moves);

    const handleComboDeleteConfirm = async (combo: Move) => {
        try {
            await fetch(`/api/combos/${combo.id}`, {
                method: 'DELETE',
            });

            setCombos((prevCombos) =>
                prevCombos.filter((c) => c.id !== combo.id),
            );
        } catch (error: any) {
            console.error(error);
        }
    };

    const handleComboEdited = async (combo: Move) => {
        setCombos((prevCombos) =>
            prevCombos.map((c) => (c.id === combo.id ? combo : c)),
        );
    };

    const handleComboCreated = async (combo: Move) => {
        setCombos((prevCombos) => [...prevCombos, combo]);
    };

    return (
        <>
            <AdminOnly>
                <div className="mb-6 flex items-center justify-end">
                    <div className={'flex gap-2'}>
                        <CreateCombo
                            session={props.session}
                            characterId={props.character.id}
                            onSuccess={handleComboCreated}
                        />
                    </div>
                </div>
            </AdminOnly>

            {combos.map((combo) => (
                <div key={combo.id}>
                    <MoveDisplay
                        notation={combo.notation}
                        move={combo}
                        onDelete={handleComboDeleteConfirm}
                        onEdit={handleComboEdited}
                    />
                </div>
            ))}
        </>
    );
}

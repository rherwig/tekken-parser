'use client';

import { Character, Combo as ComboModel } from '@prisma/client';
import { useState } from 'react';
import { Session } from 'next-auth';

import Combo from '@/components/combo';
import CreateCombo from '@/components/combos/create-combo';
import AdminOnly from '@/components/auth/admin-only';

interface Props {
    session: Session | null;
    character: Character;
    combos: ComboModel[];
}

export default function CombosList(props: Props) {
    const [combos, setCombos] = useState<ComboModel[]>(props.combos);

    const handleComboDeleteConfirm = async (combo: ComboModel) => {
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

    const handleComboEdited = async (combo: ComboModel) => {
        setCombos((prevCombos) =>
            prevCombos.map((c) => (c.id === combo.id ? combo : c)),
        );
    };

    const handleComboCreated = async (combo: ComboModel) => {
        setCombos((prevCombos) => [...prevCombos, combo]);
    };

    return (
        <>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl text-zinc-200">
                    {props.character.name}
                </h1>
                <AdminOnly session={props.session}>
                    <div className={'flex gap-2'}>
                        <CreateCombo
                            session={props.session}
                            characterId={props.character.id}
                            onSuccess={handleComboCreated}
                        />
                    </div>
                </AdminOnly>
            </div>

            {combos.map((combo) => (
                <div key={combo.id}>
                    <Combo
                        notation={combo.notation}
                        combo={combo}
                        onDelete={handleComboDeleteConfirm}
                        onEdit={handleComboEdited}
                        session={props.session}
                    />
                </div>
            ))}
        </>
    );
}

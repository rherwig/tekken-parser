'use client';

import { Character, Move as MoveModel } from '@prisma/client';
import { useState } from 'react';
import { Session } from 'next-auth';

import MoveDisplay from '@/components/move-display/move-display';

interface Props {
    session: Session | null;
    character: Character;
    moves: MoveModel[];
}

export default function MovesList(props: Props) {
    const [moves, setMoves] = useState<MoveModel[]>(
        props.moves.sort((a, b) => a.index - b.index),
    );

    return (
        <>
            {moves.map((move) => (
                <div key={move.id}>
                    <MoveDisplay
                        move={move}
                        notation={move.notation}
                    />
                </div>
            ))}
        </>
    );
}

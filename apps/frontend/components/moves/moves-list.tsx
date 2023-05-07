'use client';

import { Character, Move as MoveModel } from '@prisma/client';
import { useState } from 'react';
import { Session } from 'next-auth';

import SingleMove from '@/components/single-move';

interface Props {
    session: Session | null;
    character: Character;
    moves: MoveModel[];
}

export default function MovesList(props: Props) {
    const [moves, setMoves] = useState<MoveModel[]>(props.moves);

    return (
        <>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl text-zinc-200">
                    {props.character.name}
                </h1>
            </div>

            {moves.map((move) => (
                <div key={move.id}>
                    <SingleMove
                        move={move}
                        notation={move.notation}
                    />
                </div>
            ))}
        </>
    );
}
